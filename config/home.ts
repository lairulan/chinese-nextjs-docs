export const FEATURES = [
  {
    title: "Turbopack 默认启用",
    description:
      "Next.js 16 默认使用 Turbopack 开发与构建，编译与 HMR 更快。",
    icon: 'RefreshCwIcon',
  },
  {
    title: "Cache Components（稳定的 PPR）",
    description:
      "通过 Cache Components 精准控制渲染与缓存，获得稳定的部分预渲染体验。",
    icon: 'LayersIcon',
  },
  {
    title: "异步请求 API",
    description:
      "cookies、headers、searchParams 等 API 全面异步化，类型更安全。",
    icon: 'CodeIcon',
  },
  {
    title: "路由预取与缓存升级",
    description:
      "布局去重与增量预取，传输更小、切换更快。",
    icon: 'GitBranchIcon',
  },
  {
    title: "React 19.2 与 React Compiler",
    description:
      "内置支持最新 React 能力，可选开启 React Compiler 自动优化。",
    icon: 'SiNextdotjs',
  },
  {
    title: "内置优化",
    description:
      "自动图像、字体和脚本优化，提升用户体验和核心 Web 指标。",
    icon: 'ZapIcon',
  },
  {
    title: "数据获取",
    description:
      "支持服务器端和客户端数据获取，让组件异步等待数据。",
    icon: 'DatabaseIcon',
  },
  {
    title: "服务器操作（Server Actions）",
    description:
      "直接调用服务器函数，跳过 API，一次网络往返即可重新验证缓存数据并更新 UI。",
    icon: 'ServerIcon',
  },
  {
    title: "高级路由",
    description:
      "使用文件系统创建路由，支持复杂的路由模式和 UI 布局。",
    icon: 'GitBranchIcon',
  },
  {
    title: "动态 HTML 流式传输",
    description:
      "即时从服务器流式传输 UI，与 App Router 和 React Suspense 集成。",
    icon: 'RefreshCwIcon',
  },
  {
    title: "CSS 支持",
    description:
      "使用你喜欢的工具设计应用，包括对 CSS Modules、Tailwind CSS 和流行社区库的支持。",
    icon: 'PaletteIcon',
  },
  {
    title: "路由处理器",
    description:
      "构建 API 端点，安全地连接第三方服务，处理身份验证或监听 webhooks。",
    icon: 'AppWindowIcon',
  },
  {
    title: "中间件",
    description:
      "控制传入请求，使用代码定义路由和访问规则，用于身份验证、实验和国际化。",
    icon: 'FilterIcon',
  },
  {
    title: "React 服务器组件",
    description:
      "添加组件而无需发送额外的客户端 JavaScript。基于最新的 React 特性构建。",
    icon: 'CodeIcon',
  },
  {
    title: "灵活渲染",
    description:
      "支持客户端和服务器端渲染，包括增量静态再生（ISR），可按页面级别进行配置。",
    icon: 'LayersIcon',
  },
]

export const DOC_FEATURES = [
  {
    title: "同步 Next.js 16 官方文档",
    description:
      "完整同步 Next.js 16 的文档：Cache Components、Server Actions、Turbopack、渲染与缓存策略等关键更新。",
    icon: 'SiNextdotjs',
  },
  {
    title: "持续同步更新",
    description:
      "与官方英文文档保持同步，重要改动和最佳实践第一时间到位。",
    icon: 'RefreshCwIcon',
  },
  {
    title: "沉浸式阅读体验",
    description:
      "采用与官方文档一致的阅读布局和交互设计，让你在熟悉的界面中专注于 Next.js 知识的学习。",
    icon: 'Laptop',
  },
  {
    title: "对照方便",
    description:
      "保持与官方文档相同的 URL 结构，只需将 nextjs.org 改为 nextjscn.org，即可从英文文档无缝切换到对应的中文文档。",
    icon: 'Replace',
  },
  {
    title: "精准翻译",
    description:
      "由专业团队精心翻译，确保术语准确，概念清晰，助你深入理解 Next.js 的每个细节。",
    icon: 'Languages',
  },
  {
    title: "社区支持",
    description:
      "汇集中文开发者的问题与经验，建立本土化的 Next.js 学习社区。",
    icon: 'UsersIcon',
  },
]

export const HOME_CONTENT = {
  hero: {
    title: "Next.js 16 中文文档",
    description: "完整同步官方最新文档，为 Next.js 中文开发者创造沉浸式 Next.js 中文学习体验，助你利用 React 组件的强大功能创建高质量的网络应用程序。",
    buttons: {
      read: "开始阅读",
      follow: "Discord",
      feedback: "微信群"
    }
  },
  intro: {
    title: "什么是 Next.js？",
    description: "Next.js 是构建现代 Web 的全家桶：基于 React 服务器组件，配合 Server Actions 与 Cache Components 打通数据到 UI 的闭环；Next.js 16 默认启用 Turbopack，开发与构建更快。"
  },
  concepts: {
    title: "Next.js 核心概念",
    description: "围绕路由、渲染与缓存、数据更新和性能，Next.js 16 带来 Turbopack 默认启用、Cache Components、异步请求 API 与路由预取升级，助你构建更快更稳的生产级应用。",
    sections: {
      coreFeatures: {
        title: "核心特性",
        features: [
          "App Router 与 Pages Router",
          "React 服务器组件（RSC）",
          "Server Actions",
          "Cache Components（稳定的 PPR 体验）",
          "API 路由与 Route Handlers"
        ],
        cta: "开始阅读"
      },
      performance: {
        title: "性能优化",
        features: [
          "Turbopack 默认启用",
          "增量预取与布局去重",
          "图像与字体优化",
          "增量静态再生 (ISR)",
          "Edge 运行时与流式渲染"
        ],
        cta: "开始阅读"
      }
    }
  },
  docFeaturesSection: {
    title: "中文文档特色"
  },
  community: {
    title: "社群交流",
    description: "欢迎 Next.js 中文开发者加入到微信交流群，一起学习 Next.js 技术，一起交流出海技能。",
    buttons: {
      joinGroup: "加入交流群",
      followJike: "关注即刻"
    }
  }
};

export const WHATS_NEW_FEATURES = [
  {
    title: "默认启用 Turbopack",
    description: "开发与构建默认使用 Turbopack，显著加速编译与 HMR。",
    icon: 'RefreshCwIcon',
    href: "/docs/app/guides/upgrading/version-16",
  },
  {
    title: "Cache Components（取代实验性 PPR）",
    description: "通过 cacheComponents 精准控制流式与缓存，获得稳定的 PPR 体验。",
    icon: 'LayersIcon',
    href: "/docs/app/guides/upgrading/version-16#partial-pre-rendering-ppr",
  },
  {
    title: "异步请求 API 全面生效",
    description: "cookies、headers、searchParams 全面异步化，类型自动生成更安全。",
    icon: 'CodeIcon',
    href: "/docs/app/guides/upgrading/version-16#async-request-apis",
  },
  {
    title: "路由预取与缓存升级",
    description: "布局去重与增量预取，体积更小、切换更快。",
    icon: 'GitBranchIcon',
    href: "/docs/app/guides/upgrading/version-16#增强的路由和导航",
  },
  {
    title: "React 19.2 / React Compiler",
    description: "官方支持最新 React 能力，可选开启 React Compiler 自动优化。",
    icon: 'SiNextdotjs',
    href: "/docs/app/guides/upgrading/version-16#react-192",
  },
  {
    title: "从 middleware 到 proxy",
    description: "澄清网络边界，统一 Node.js 运行时语义。",
    icon: 'Replace',
    href: "/docs/app/guides/upgrading/version-16#middleware-到-proxy",
  },
];

export const FAQS = [
  {
    q: "这是官方吗？与 nextjs.org 有何关系？",
    a: "本站为民间维护的中文翻译站点，严格同步官方文档，链接结构保持一致，便于中英文对照学习。",
  },
  {
    q: "为什么要使用中文文档？",
    a: "我们提供与官方文档一致的阅读体验和交互设计，并同步最新更新，让你可以用自己熟悉的语言学习 Next.js 16 知识。",
  },
  {
    q: "如何反馈问题或参与贡献？",
    a: "可通过 Discord、微信群反馈。",
  },
  {
    q: "如何从 Next.js 15 升级到 16？",
    a: "参考升级指南：默认 Turbopack、异步 API、Cache Components 等需要重点关注。",
  },
];
