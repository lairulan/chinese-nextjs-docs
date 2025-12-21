"use client";
import { normalizeEmail, validateEmail } from "@/lib/validation/email";
import { Send } from "lucide-react";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    const normalizedEmailAddress = normalizeEmail(email);
    const { isValid, error } = validateEmail(normalizedEmailAddress);
    console.log(isValid, error);

    if (!isValid) {
      setSubscribeStatus("error");
      setErrorMessage(error || "请输入有效的邮箱地址");
      setTimeout(() => setSubscribeStatus("idle"), 5000);
      return;
    }

    try {
      setSubscribeStatus("loading");

      // 调用 API 端点
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: normalizedEmailAddress }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "订阅失败");
      }

      // 成功处理
      setSubscribeStatus("success");
      setEmail("");
      setErrorMessage("");
      // 5秒后重置状态
      setTimeout(() => setSubscribeStatus("idle"), 5000);
    } catch (error) {
      setSubscribeStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "订阅失败，请稍后再试"
      );
      // 5秒后重置状态
      setTimeout(() => setSubscribeStatus("idle"), 5000);
    }
  };
  return (
    <div className="mt-6">
      <div className="mb-3 font-semibold">订阅我们的邮件</div>
      <p className="text-sm text-secondary-foreground mb-3">
        获取最新的 Next.js 资讯和教程
      </p>
      <form onSubmit={handleSubscribe} className="flex flex-col gap-2 max-w-64">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            disabled={subscribeStatus === "loading"}
          />
        </div>
        <button
          type="submit"
          disabled={subscribeStatus === "loading"}
          className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-70"
        >
          {subscribeStatus === "loading" ? (
            "订阅中..."
          ) : (
            <>
              订阅 <Send className="w-3.5 h-3.5" />
            </>
          )}
        </button>
        {subscribeStatus === "success" && (
          <p className="text-xs text-green-600 mt-1">
            订阅成功！感谢您的关注。
          </p>
        )}
        {subscribeStatus === "error" && (
          <p className="text-xs text-red-600 mt-1">{errorMessage}</p>
        )}
      </form>
    </div>
  );
}
