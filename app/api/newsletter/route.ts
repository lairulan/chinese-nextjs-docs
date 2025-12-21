import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { Redis } from '@upstash/redis';
// import { Ratelimit } from '@upstash/ratelimit';
import { headers } from 'next/headers';
import { normalizeEmail, validateEmail } from '@/lib/validation/email';

// const REDIS_RATE_LIMIT_KEY = process.env.UPSTASH_REDIS_NEWSLETTER_RATE_LIMIT_KEY!;
// const DAY_MAX_SUBMISSIONS = parseInt(process.env.DAY_MAX_SUBMISSIONS || '10');

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
// const limiter = new Ratelimit({
//   redis,
//   limiter: Ratelimit.slidingWindow(DAY_MAX_SUBMISSIONS, '1h'),
//   prefix: REDIS_RATE_LIMIT_KEY,
// });

export async function POST(request: Request) {
  try {
    const headersList = headers();
    const ip = headersList.get('x-real-ip') ||
      headersList.get('x-forwarded-for') ||
      'unknown';

    // 1. 速率限制检查
    // const { success: rateLimitSuccess } = await limiter.limit(ip);
    // if (!rateLimitSuccess) {
    //   return NextResponse.json(
    //     { error: '提交太频繁，请稍后再试' },
    //     { status: 429 }
    //   );
    // }

    const body = await request.json();
    let { email } = body;
    email = normalizeEmail(email);

    if (!email) {
      return NextResponse.json(
        { error: '邮箱不能为空' },
        { status: 400 }
      );
    }
    const { isValid, error } = validateEmail(email);
    if (!isValid) {
      return NextResponse.json(
        { error: error },
        { status: 400 }
      );
    }

    // 生成唯一的退订令牌
    const unsubscribeToken = Buffer.from(email).toString('base64');

    // 构建退订链接
    const unsubscribeLink = `${process.env.NEXT_PUBLIC_SITE_URL}/unsubscribe?token=${unsubscribeToken}`;

    // 检查用户是否已存在
    // const list = await resend.contacts.list({
    //   audienceId: AUDIENCE_ID,
    // });
    // const user = list.data?.data.find((item) => item.email === email);
    // if (user) {
    //   return NextResponse.json({ success: true, alreadySubscribed: true });
    // }

    // 将用户添加到 Resend Audience
    try {
      await resend.contacts.create({
        audienceId: AUDIENCE_ID,
        email,
        // 可选：添加更多用户信息
        // firstName: '',
        // lastName: '',
        // data: { source: 'website_footer' }
      });
    } catch (audienceError) {
      console.error('添加到 Resend Audience 失败:', audienceError);
    }

    // 发送欢迎邮件
    await resend.emails.send({
      from: 'Next.js中文文档 <' + process.env.ADMIN_EMAIL! + '>',
      to: email,
      subject: '「Next.js 中文文档」邮件订阅成功',
      html: `
        <h2>邮件订阅成功</h2>
        <p>感谢您订阅「Next.js 中文文档」，接下来将收到最新的文档更新和相关资讯。</p>
        <p style="margin-top: 20px; font-size: 12px; color: #666;">
          如果您希望退订，请<a href="${unsubscribeLink}">点击这里</a>
        </p>
      `,
      // 添加 List-Unsubscribe 头部，这是邮件客户端识别退订链接的标准方式
      headers: {
        "List-Unsubscribe": `<${unsubscribeLink}>`,
        "List-Unsubscribe-Post": "List-Unsubscribe=One-Click"
      }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('邮箱订阅失败:', error);
    return NextResponse.json(
      { error: '服务器处理请求失败' },
      { status: 500 }
    );
  }
}
