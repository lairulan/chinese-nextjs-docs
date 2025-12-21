import { SiteConfig } from "@/types/siteConfig";

export const BASE_URL = "https://nextjscn.org";
export const BLOG_URL_1 = "https://weijunext.com/?utm_source=nextjscn";
export const TWITTER_URL_1 =
  "https://x.com/intent/follow?screen_name=weijunext";
export const TWITTER_URL_2 = "https://x.com/intent/follow?screen_name=awei_dev";
export const JIKE_URL_1 = "https://okjk.co/QFBTzp";
export const JIKE_URL_2 = "https://okjk.co/y0Km6S";
export const DISCORD_URL = "https://discord.gg/RVzeCQYnBp";

export const WECHAT_URL = "https://mp.weixin.qq.com/s/ctq5sYAxfmW9eIBD9IBjbQ";

const baseSiteConfig = {
  name: "Next.js 16 中文文档",
  description:
    "Next.js 16 中文文档是官方英文文档最新、最全面的中文翻译，欢迎中文开发者使用 Next.js 中文文档学习 Next.js，本文档包括 Next.js app router 和 Next.js pages router 知识",
  url: BASE_URL,
  metadataBase: BASE_URL,
  keywords: [
    "next.js 中文文档",
    "Next.js 16",
    "next.js 中文",
    "nextjs 中文教程",
    "next 中文",
    "Next.js 教程",
    "Partial Prerendering 中文",
    "Server Actions 中文",
    "React 服务器组件",
    "Next.js app router",
    "Next.js pages router",
    "React SSR",
    "Turbopack",
    "Next.js SEO"
  ],
  authors: [
    {
      name: "weijunext",
      url: BLOG_URL_1,
      twitter: TWITTER_URL_1,
      jike: JIKE_URL_1,
    },
    {
      name: "awei_dev",
      url: BASE_URL,
      twitter: TWITTER_URL_2,
      jike: JIKE_URL_2,
    },
  ],
  creator: "@weijunext",
  defaultNextTheme: "light", // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  headerLinks: [
    {
      label: "中文文档",
      href: "/docs",
      prefetch: true,
    },
    {
      label: "社区资源",
      href: "/resource",
      prefetch: false,
    },
    {
      label: "Showcase",
      href: "https://nextjs.org/showcase",
      rel: "noopener noreferrer nofollow",
      target: "_blank",
      prefetch: false,
    },
    {
      label: "Blog",
      href: "https://nextjs.org/blog",
      rel: "noopener noreferrer nofollow",
      target: "_blank",
      prefetch: false,
    },
    {
      label: "Templates",
      href: "https://vercel.com/templates/next.js?utm_source=next-site&utm_medium=navbar&utm_campaign=next_site_nav_templates",
      rel: "noopener noreferrer nofollow",
      target: "_blank",
      prefetch: false,
    },
    {
      label: "Enterprise",
      href: "https://vercel.com/contact/sales/nextjs?utm_source=next-site&utm_medium=navbar&utm_campaign=next_site_nav_enterprise",
      rel: "noopener noreferrer nofollow",
      target: "_blank",
      prefetch: false,
    },
  ],
  footerLinks: [
    {
      label: "Resources",
      links: [
        { label: "中文文档", href: "/docs" },
        { label: "社区资源", href: "/resource" },
        {
          label: "实时数据",
          href: "https://p.wenext.dev/nextjscn.org",
          rel: "noopener noreferrer nofollow",
          prefetch: false,
          target: "_blank",
        },
        {
          label: "Showcase",
          href: "https://nextjs.org/showcase",
          rel: "noopener noreferrer nofollow",
          prefetch: false,
          target: "_blank",
        },
        {
          label: "Blog",
          href: "https://nextjs.org/blog",
          rel: "noopener noreferrer nofollow",
          prefetch: false,
          target: "_blank",
        },
        {
          label: "Analytics",
          href: "https://vercel.com/analytics?utm_source=next-site&utm_medium=footer&utm_campaign=docs",
          rel: "noopener noreferrer nofollow",
          prefetch: false,
          target: "_blank",
        },
        {
          label: "Previews",
          href: "https://vercel.com/products/previews?utm_source=next-site&utm_medium=footer&utm_campaign=docs",
          rel: "noopener noreferrer nofollow",
          prefetch: false,
          target: "_blank",
        },
      ],
    },
    {
      label: "开始学习",
      links: [
        {
          label: "Getting Started", // 来自 docsLink
          href: "/docs",
          prefetch: true
        },
        {
          label: "Guides",
          href: "/docs/app/guides",
          prefetch: true
        },
        {
          label: "API Reference",
          href: "/docs/app/api-reference",
          prefetch: true
        },
        {
          label: "Architecture", // 来自 architectureLinks
          href: "/docs/architecture",
          prefetch: true
        },
        {
          label: "Community", // 来自 communityLinks
          href: "/docs/community",
          prefetch: true
        }
      ],
    },
    {
      label: "推荐",
      links: [
        {
          label: "全栈SaaS模板（Pro）",
          href: "https://nexty.dev/zh",
          target: "_blank",
          rel: "noopener",
          prefetch: false,
        },
        {
          label: "轻量Next.js模板（开源）",
          href: "https://nextforge.dev/?utm_source=nextjscn",
          target: "_blank",
          rel: "noopener",
          prefetch: false,
        },
        {
          label: "J 实验室",
          href: "https://weijunext.com/",
          target: "_blank",
          rel: "noopener",
          prefetch: false,
        },
        {
          label: "Free OG Image Generator",
          href: "https://myogimage.com/",
          target: "_blank",
          rel: "noopener",
          prefetch: false,
        },
      ],
    },
    {
      label: "联系我们",
      links: [
        {
          label: "Discord",
          href: DISCORD_URL,
          target: "_blank",
          rel: "noopener noreferrer nofollow",
          prefetch: false,
        },
        {
          label: "微信交流群",
          href: WECHAT_URL,
          target: "_blank",
          rel: "noopener noreferrer nofollow",
          prefetch: false,
        },
        {
          label: "Twitter(weijunext)",
          href: TWITTER_URL_1,
          target: "_blank",
          rel: "noopener noreferrer nofollow",
          prefetch: false,
        },
        {
          label: "即刻（程普）",
          href: JIKE_URL_1,
          target: "_blank",
          rel: "noopener noreferrer nofollow",
          prefetch: false,
        },
        {
          label: "Twitter(阿伟dev)",
          href: TWITTER_URL_2,
          target: "_blank",
          rel: "noopener noreferrer nofollow",
          prefetch: false,
        },
        {
          label: "即刻（阿伟dev）",
          href: JIKE_URL_2,
          target: "_blank",
          rel: "noopener noreferrer nofollow",
          prefetch: false,
        },
      ],
    },
  ],
};

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  footerLinks: baseSiteConfig.footerLinks.map((group) => ({
    ...group,
    links: group.links.filter((link) => link !== undefined),
  })),
  openGraph: {
    type: "website",
    locale: "zh-CN",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.webp`],
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    site: baseSiteConfig.url,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.webp`],
    creator: baseSiteConfig.creator,
  },
};
