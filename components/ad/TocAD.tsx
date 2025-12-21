import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function TocAD() {
  return (
    <div className="group relative flex flex-col gap-2 rounded-lg border p-4 text-sm mt-6">
      <div className="text-balance text-lg font-semibold leading-tight group-hover:underline flex items-center gap-1">
        Next.js SaaS 模板 <ExternalLink className="w-4 h-4" />
      </div>
      <ul>
        <li>
          <strong>1、功能完整</strong>
          ：内置认证、支付、AI、CMS、邮件订阅等核心功能
        </li>
        <li>
          <strong>2、AI 测试广场</strong>：6种主流 AI 功能 Demo，助你更快学会 AI
          功能开发
        </li>
        <li>
          <strong>3、可视化定价管理</strong>
          ：首创管理员后台页面设置定价卡片，安全又便捷
        </li>
        <li>
          <strong>4、高级 CMS</strong>
          ：同类模板最强CMS，支持设置访问权限、支持编排多语言博客
        </li>
      </ul>
      <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-8 rounded-md px-3 text-xs mt-2 w-fit">
        立即获取模板
        <a
          target="_blank"
          rel="noreferrer"
          className="absolute inset-0"
          href="https://nexty.dev/"
        >
          <span className="sr-only">立即获取模板</span>
        </a>
      </Button>
    </div>
  );
}
