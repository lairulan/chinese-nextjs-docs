import { Resend } from "resend";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";
import { headers } from "next/headers";
import { normalizeEmail, validateEmail } from "@/lib/validation/email";

// 初始化 Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Resend Audience ID
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID!;

// 初始化 Redis
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// 创建速率限制器
const limiter = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(10, "1h"),
  prefix: process.env.UPSTASH_REDIS_UNSUBSCRIBE_RATE_LIMIT_KEY!,
});

async function unsubscribe(token: string) {
  "use server";

  try {
    // 获取 IP 地址进行速率限制
    const headersList = headers();
    const ip =
      headersList.get("x-real-ip") ||
      headersList.get("x-forwarded-for") ||
      "unknown";

    // 速率限制检查
    const { success: rateLimitSuccess } = await limiter.limit(ip);
    if (!rateLimitSuccess) {
      return {
        success: false,
        error: "请求太频繁，请稍后再试",
      };
    }

    // 解码并验证邮箱
    const email = Buffer.from(token, "base64").toString();
    const normalizedEmail = normalizeEmail(email);
    const { isValid, error: validationError } = validateEmail(normalizedEmail);

    if (!isValid) {
      return {
        success: false,
        error: validationError || "无效的邮箱地址",
      };
    }

    // 检查用户是否在订阅列表中
    const list = await resend.contacts.list({
      audienceId: AUDIENCE_ID,
    });

    const user = list.data?.data.find((item) => item.email === normalizedEmail);
    if (!user) {
      return {
        success: false,
        error: "该邮箱未订阅我们的通知",
      };
    }

    // 从 Resend Audience 中移除该邮箱
    await resend.contacts.remove({
      audienceId: AUDIENCE_ID,
      email: normalizedEmail,
    });

    return {
      success: true,
      email: normalizedEmail,
    };
  } catch (error) {
    console.error("退订处理失败:", error);
    return {
      success: false,
      error: "退订处理失败，请稍后重试",
    };
  }
}

export default async function UnsubscribePage({
  searchParams,
}: {
  searchParams: { token?: string };
}) {
  let status: "error" | "success" = "error";
  let email = "";
  let errorMessage = "处理您的退订请求时出现问题";

  const token = searchParams.token;

  if (!token) {
    errorMessage = "未提供退订令牌";
  } else {
    try {
      // 执行退订操作
      const result = await unsubscribe(token);

      if (result.success) {
        status = "success";
        email = result.email || "";
      } else {
        errorMessage = result.error || "处理您的退订请求时出现问题";
      }
    } catch (e) {
      console.error("退订处理失败:", e);
      errorMessage = "处理退订请求时发生错误";
    }
  }

  return (
    <div className="max-w-md mx-auto my-16 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">邮件订阅管理</h1>

      {status === "success" ? (
        <div>
          <p className="mb-4">您已成功退订「Next.js 中文文档」的邮件通知。</p>
          <p className="text-sm text-gray-600">邮箱: {email}</p>
          <p className="mt-6">如果您改变主意，随时可以重新订阅。</p>
        </div>
      ) : (
        <div>
          <p className="text-red-600 mb-4">{errorMessage}</p>
          <p>请确保您使用了正确的退订链接，或联系我们的支持团队获取帮助。</p>
        </div>
      )}
    </div>
  );
}
