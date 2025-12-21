import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Users,
  ArrowRight,
  Languages,
  RefreshCwIcon,
  CodeIcon,
  UsersIcon,
  Zap,
  ZapIcon,
  DatabaseIcon,
  ServerIcon,
  GitBranchIcon,
  LayersIcon,
  PaletteIcon,
  FilterIcon,
  AppWindowIcon,
  BookOpen,
  Laptop,
  Replace,
} from "lucide-react";
import { WeChat } from "@/components/social-icons/icons";
import {
  DISCORD_URL,
  JIKE_URL_1,
  TWITTER_URL_1,
  WECHAT_URL,
  siteConfig,
} from "@/config/site";
import { cn } from "@/lib/utils";
import Jike from "@/components/icons/jike";
import { SiNextdotjs } from "react-icons/si";
import { BsDiscord } from "react-icons/bs";

export const metadata = {
  ...siteConfig,
  title: siteConfig.name,
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    ...siteConfig.openGraph,
    title: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  },
  twitter: {
    ...siteConfig.twitter,
    title: siteConfig.name,
    site: siteConfig.url,
    description: siteConfig.description,
  },
};

export default async function Home() {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    image: `${siteConfig.url}/og.webp`,
    inLanguage: "zh-CN",
    creator: {
      "@type": "Person",
      name: "weijunext",
      url: TWITTER_URL_1,
    },
  } as const;

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    logo: `${siteConfig.url}/logo.png`,
  } as const;
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex flex-col items-center justify-center gap-4">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Next.js 16 中文文档
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                完整同步官方最新文档，为 Next.js 中文开发者创造沉浸式 Next.js
                中文学习体验，助你利用 React
                组件的强大功能创建高质量的网络应用程序。
              </p>
            </div>
            <div className="space-x-4 flex items-center">
              <Link href="/docs" title="开始阅读">
                <Button>
                  <BookOpen className="mr-2 h-4 w-4" /> 开始阅读
                </Button>
              </Link>
              <Link
                href={DISCORD_URL}
                rel="noopener noreferrer nofollow"
                target="_blank"
                title="Discord"
                prefetch={false}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "inline-flex items-center border-gray-300 dark:border-gray-700 text-primary hover:text-primary/90"
                )}
              >
                <BsDiscord className="mr-2 h-4 w-4" />
                Discord
              </Link>
              <Link
                href={WECHAT_URL}
                rel="noopener noreferrer nofollow"
                target="_blank"
                title="微信群"
                prefetch={false}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "inline-flex items-center border-gray-300 dark:border-gray-700 text-primary hover:text-primary/90"
                )}
              >
                <WeChat className="mr-2 h-4 w-4" />
                微信群
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Next.js 16 有哪些更新？
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/docs/app/guides/upgrading/version-16"
              className="flex items-start space-x-4 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-600"
            >
              <RefreshCwIcon className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold mb-1">默认启用 Turbopack</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  开发与构建默认使用 Turbopack，显著加速编译与 HMR。
                </p>
              </div>
            </Link>
            <Link
              href="/docs/app/guides/upgrading/version-16#partial-pre-rendering-ppr"
              className="flex items-start space-x-4 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-600"
            >
              <LayersIcon className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold mb-1">
                  Cache Components（取代实验性 PPR）
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  通过 cacheComponents 精准控制流式与缓存，获得稳定的 PPR 体验。
                </p>
              </div>
            </Link>
            <Link
              href="/docs/app/guides/upgrading/version-16#async-request-apis"
              className="flex items-start space-x-4 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-600"
            >
              <CodeIcon className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold mb-1">异步请求 API 全面生效</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  cookies、headers、searchParams
                  全面异步化，类型自动生成更安全。
                </p>
              </div>
            </Link>
            <Link
              href="/docs/app/guides/upgrading/version-16#增强的路由和导航"
              className="flex items-start space-x-4 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-600"
            >
              <GitBranchIcon className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold mb-1">路由预取与缓存升级</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  布局去重与增量预取，体积更小、切换更快。
                </p>
              </div>
            </Link>
            <Link
              href="/docs/app/guides/upgrading/version-16#react-192"
              className="flex items-start space-x-4 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-600"
            >
              <SiNextdotjs className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold mb-1">
                  React 19.2 / React Compiler
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  官方支持最新 React 能力，可选开启 React Compiler 自动优化。
                </p>
              </div>
            </Link>
            <Link
              href="/docs/app/guides/upgrading/version-16#middleware-到-proxy"
              className="flex items-start space-x-4 bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-600"
            >
              <Replace className="h-8 w-8 text-primary" />
              <div>
                <h3 className="font-semibold mb-1">从 middleware 到 proxy</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  澄清网络边界，统一 Node.js 运行时语义。
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            什么是 Next.js？
          </h2>
          <p className="text-xl text-center mb-12 text-gray-600 dark:text-gray-300">
            Next.js 是构建现代 Web 的全家桶：基于 React 服务器组件，配合 Server
            Actions 与 Cache Components 打通数据到 UI 的闭环；Next.js 16
            默认启用 Turbopack，开发与构建更快。
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <RefreshCwIcon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">Turbopack 默认启用</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Next.js 16 默认使用 Turbopack 开发与构建，编译与 HMR 更快。
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <LayersIcon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">
                Cache Components（稳定的 PPR）
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                通过 Cache Components
                精准控制渲染与缓存，获得稳定的部分预渲染体验。
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <CodeIcon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">异步请求 API</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                cookies、headers、searchParams 等 API 全面异步化，类型更安全。
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <GitBranchIcon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">路由预取与缓存升级</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                布局去重与增量预取，传输更小、切换更快。
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <SiNextdotjs className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">
                React 19.2 与 React Compiler
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                内置支持最新 React 能力，可选开启 React Compiler 自动优化。
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <ZapIcon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">内置优化</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                自动图像、字体和脚本优化，提升用户体验和核心 Web 指标。
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <DatabaseIcon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">数据获取</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                支持服务器端和客户端数据获取，让组件异步等待数据。
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <ServerIcon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">
                服务器操作（Server Actions）
              </h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                直接调用服务器函数，跳过
                API，一次网络往返即可重新验证缓存数据并更新 UI。
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <GitBranchIcon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">高级路由</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                使用文件系统创建路由，支持复杂的路由模式和 UI 布局。
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <RefreshCwIcon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">动态 HTML 流式传输</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                即时从服务器流式传输 UI，与 App Router 和 React Suspense 集成。
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <PaletteIcon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">CSS 支持</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                使用你喜欢的工具设计应用，包括对 CSS Modules、Tailwind CSS
                和流行社区库的支持。
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <AppWindowIcon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">路由处理器</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                构建 API 端点，安全地连接第三方服务，处理身份验证或监听
                webhooks。
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <FilterIcon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">中间件</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                控制传入请求，使用代码定义路由和访问规则，用于身份验证、实验和国际化。
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <CodeIcon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">React 服务器组件</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                添加组件而无需发送额外的客户端 JavaScript。基于最新的 React
                特性构建。
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <LayersIcon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg font-semibold">灵活渲染</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                支持客户端和服务器端渲染，包括增量静态再生（ISR），可按页面级别进行配置。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Next.js 核心概念
          </h2>
          <p className="text-xl text-center mb-12 text-gray-600 dark:text-gray-300">
            围绕路由、渲染与缓存、数据更新和性能，Next.js 16 带来 Turbopack
            默认启用、Cache Components、异步请求 API
            与路由预取升级，助你构建更快更稳的生产级应用。
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-600">
              <h3 className="text-2xl font-bold mb-4">核心特性</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    App Router 与 Pages Router
                  </span>
                </li>
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    React 服务器组件（RSC）
                  </span>
                </li>
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Server Actions
                  </span>
                </li>
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Cache Components（稳定的 PPR 体验）
                  </span>
                </li>
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    API 路由与 Route Handlers
                  </span>
                </li>
              </ul>
              <Link
                href="/docs"
                title="开始阅读"
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "inline-flex items-center mt-6 hover:underline border-gray-300 dark:border-gray-700 text-primary hover:text-primary/90"
                )}
              >
                开始阅读 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-600">
              <h3 className="text-2xl font-bold mb-4">性能优化</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Turbopack 默认启用
                  </span>
                </li>
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    增量预取与布局去重
                  </span>
                </li>
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    图像与字体优化
                  </span>
                </li>
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    增量静态再生 (ISR)
                  </span>
                </li>
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-primary mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Edge 运行时与流式渲染
                  </span>
                </li>
              </ul>
              <Link
                href="/docs"
                title="开始阅读"
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "inline-flex items-center mt-6 hover:underline border-gray-300 dark:border-gray-700 text-primary hover:text-primary/90"
                )}
              >
                开始阅读 <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">中文文档特色</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex items-start space-x-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <SiNextdotjs className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-bold mb-2">
                  同步 Next.js 16 官方文档
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  完整同步 Next.js 16 的文档：Cache Components、Server
                  Actions、Turbopack、渲染与缓存策略等关键更新。
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <RefreshCwIcon className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-bold mb-2">持续同步更新</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  与官方英文文档保持同步，重要改动和最佳实践第一时间到位。
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <Laptop className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-bold mb-2">沉浸式阅读体验</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  采用与官方文档一致的阅读布局和交互设计，让你在熟悉的界面中专注于
                  Next.js 知识的学习。
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <Replace className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-bold mb-2">对照方便</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  保持与官方文档相同的 URL 结构，只需将 nextjs.org 改为
                  nextjscn.org，即可从英文文档无缝切换到对应的中文文档。
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <Languages className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-bold mb-2">精准翻译</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  由专业团队精心翻译，确保术语准确，概念清晰，助你深入理解
                  Next.js 的每个细节。
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <UsersIcon className="h-8 w-8 text-primary" />
              <div>
                <h3 className="text-xl font-bold mb-2">社区支持</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  汇集中文开发者的问题与经验，建立本土化的 Next.js 学习社区。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">常见问题</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-2">
                这是官方吗？与 nextjs.org 有何关系？
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                本站为民间维护的中文翻译站点，严格同步官方文档，链接结构保持一致，便于中英文对照学习。
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-2">
                为什么要使用中文文档？
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                我们提供与官方文档一致的阅读体验和交互设计，并同步最新更新，让你可以用自己熟悉的语言学习
                Next.js 16 知识。
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-2">
                如何反馈问题或参与贡献？
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                可通过 Discord、微信群反馈。
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold mb-2">
                如何从 Next.js 15 升级到 16？
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                参考升级指南：默认 Turbopack、异步 API、Cache Components
                等需要重点关注。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-8 md:py-12 lg:py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">社群交流</h2>
          <div className="flex flex-col items-center space-y-4 text-center">
            <Users className="h-16 w-16 text-primary" />
            <p className="max-w-[700px] text-gray-500 dark:text-gray-400 text-lg">
              欢迎 Next.js 中文开发者加入交流群，一起学习 Next.js
              技术，一起交流出海技能。
            </p>
            <div className="space-x-4">
              <Link
                href={DISCORD_URL}
                rel="noopener noreferrer nofollow"
                target="_blank"
                title="加入 Discord 交流群"
                prefetch={false}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "inline-flex items-center border-gray-300 dark:border-gray-700 text-primary hover:text-primary/90"
                )}
              >
                <BsDiscord className="mr-2 h-4 w-4" />
                Discord 交流群
              </Link>
              <Link
                href={WECHAT_URL}
                title="加入微信交流群"
                rel="noopener noreferrer nofollow"
                target="_blank"
                prefetch={false}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "border-gray-300 dark:border-gray-700 text-primary hover:text-primary/90"
                )}
              >
                <WeChat className="mr-2 h-4 w-4" /> 微信交流群
              </Link>
              <Link
                href={JIKE_URL_1}
                title="关注即刻"
                rel="noopener noreferrer nofollow"
                target="_blank"
                prefetch={false}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "border-gray-300 dark:border-gray-700 text-primary hover:text-primary/90"
                )}
              >
                <Jike className="mr-2 h-4 w-4" /> 关注即刻
              </Link>
            </div>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
    </main>
  );
}
