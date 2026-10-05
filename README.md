<!-- 0xfaheng-brand:start -->
> Fork 自 [ErvingZheng/chinese-nextjs-docs](https://github.com/ErvingZheng/chinese-nextjs-docs)；原项目署名和许可条款以原作者声明为准。
> 此 Fork 所在账号：**0xfaheng**（上海封阳科技创始人） · [主页与公开项目](https://github.com/0xfaheng)
> 微信 `faheng2009` · [X](https://x.com/0xfaheng) · [YouTube](https://www.youtube.com/@0xfaheng) · [微信二维码](https://github.com/0xfaheng/0xfaheng/blob/main/assets/wechat-qr.png)
<!-- 0xfaheng-brand:end -->

---

<div align="center">
  <img src="public/logo.svg" alt="Next.js 中文文档" width="120" />
  <h1>Next.js 中文文档</h1>
  <p>🌏 最新、最全面的 Next.js 官方文档中文翻译</p>
  
  [![Website](https://img.shields.io/website?url=https%3A%2F%2Fnextjscn.org&label=nextjscn.org)](https://nextjscn.org)
  [![License](https://img.shields.io/badge/license-MIT%20with%20Attribution-blue.svg)](LICENSE)
  [![Next.js](https://img.shields.io/badge/Next.js-14.1.1-black)](https://nextjs.org)

[在线访问](https://nextjscn.org) · [报告问题](https://github.com/ErvingZheng/chinese-nextjs-docs/issues) · [参与贡献](https://github.com/ErvingZheng/chinese-nextjs-docs/pulls)

</div>

---

## ⚠️ 使用本开源代码的要求

> **重要提示**：使用本项目代码前，请务必阅读以下条款

本项目采用 **MIT License with Attribution Requirement**，这意味着：

### ✅ 你可以

- 免费使用本项目代码
- 用于商业项目
- 修改代码以满足你的需求
- 分发你的衍生作品

### ⚠️ 你必须

1. **保留版权声明** - 在代码中保留原始的版权声明
2. **在 Footer 中添加 GitHub 仓库链接** - 任何使用此代码的网站都必须在页面底部（或其他显著位置）添加指向本项目 GitHub 仓库的链接

#### Footer 链接示例

```html
<a
  href="https://github.com/ErvingZheng/chinese-nextjs-docs"
  target="_blank"
  rel="noopener noreferrer"
>
  Powered by Open Next.js Docs
</a>
```

> 💡 这个要求有助于让更多开发者发现和受益于这个开源项目，支持开源社区的发展。

详细协议内容请查看 [LICENSE](./LICENSE) 文件。

---

## 📖 项目介绍

Next.js 中文文档是 Next.js 官方英文文档的中文翻译版本，旨在为中文开发者提供一个高质量、易于理解的 Next.js 学习资源。

本项目涵盖：

- **App Router** - Next.js 最新的路由系统
- **Pages Router** - 经典的页面路由系统
- **API Reference** - 完整的 API 参考文档
- **Architecture** - Next.js 架构设计
- **Community** - 社区资源和贡献指南

## ✨ 功能特性

- 🌙 **深色/浅色主题** - 支持自动切换
- 🔍 **全文搜索** - 基于 DocSearch 的快速文档搜索
- 📱 **响应式设计** - 完美适配各种设备
- 🚀 **快速加载** - 优化的静态生成和增量构建

## 🛠️ 技术栈

| 技术                                    | 说明            |
| --------------------------------------- | --------------- |
| [Next.js 14](https://nextjs.org)        | React 全栈框架  |
| [React 18](https://react.dev)           | UI 库           |
| [MDX](https://mdxjs.com)                | Markdown + JSX  |
| [Tailwind CSS](https://tailwindcss.com) | 原子化 CSS 框架 |
| [Shiki](https://shiki.matsu.io)         | 代码语法高亮    |

## 🚀 快速开始

### 环境要求

- Node.js 18.17 或更高版本
- pnpm（推荐）或 npm

### 安装步骤

1. **克隆仓库**

```bash
git clone https://github.com/ErvingZheng/chinese-nextjs-docs.git
cd open-nextjs-docs
```

2. **安装依赖**

```bash
pnpm install
```

3. **启动开发服务器**

```bash
pnpm dev
```

4. **打开浏览器访问** [http://localhost:3000](http://localhost:3000)

### 构建生产版本

```bash
pnpm build
pnpm start
```

## 📁 项目结构

```
├── app/                    # Next.js App Router
│   ├── docs/              # 文档页面
│   ├── resource/          # 资源页面
│   └── api/               # API 路由
├── components/            # React 组件
│   ├── mdx/              # MDX 相关组件
│   ├── SideNavigation/   # 侧边导航
│   ├── header/           # 页头组件
│   ├── footer/           # 页脚组件
│   └── ui/               # UI 基础组件
├── config/               # 配置文件
├── content/              # MDX 文档内容
│   ├── 01-app/          # App Router 文档
│   ├── 02-pages/        # Pages Router 文档
│   ├── 03-architecture/ # 架构文档
│   └── 04-community/    # 社区文档
├── hooks/                # React Hooks
├── lib/                  # 工具函数
├── public/               # 静态资源
├── scripts/              # 构建脚本
├── styles/               # 全局样式
└── types/                # TypeScript 类型定义
```

## 📝 翻译工作流

如果你想更新翻译内容，请按以下步骤操作：

1. 在 `content/` 目录中修改对应的 MDX 文件
2. 执行预构建脚本生成菜单和索引文件：

```bash
pnpm prebuild
```

该命令会自动执行：

- `npx ts-node scripts/generateMenu.ts` - 生成 `menuLink.ts`
- `pnpm generate-order-index` - 生成所需的 JSON 文件

## 🤝 参与贡献

我们非常欢迎各种形式的贡献！

- 🐛 **报告 Bug** - 如果你发现了 bug，请提交 [Issue](https://github.com/ErvingZheng/chinese-nextjs-docs/issues)
- 📝 **改进翻译** - 如果你发现翻译不准确或有更好的表达，欢迎提交 PR
- ✨ **新功能建议** - 如果你有好的想法，欢迎讨论
- 📖 **完善文档** - 帮助我们改进项目文档

### 贡献步骤

1. Fork 本仓库
2. 创建你的分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

## 📞 联系我们

- 💬 [Discord 社区](https://discord.gg/RVzeCQYnBp)
- 📱 [微信交流群](https://mp.weixin.qq.com/s/ctq5sYAxfmW9eIBD9IBjbQ)
- 🐦 Twitter: [@weijunext](https://x.com/weijunext) / [@awei_dev](https://x.com/awei_dev)
- 🏠 即刻: [程普](https://okjk.co/QFBTzp) / [阿伟 dev](https://okjk.co/y0Km6S)

## 👥 Next.js 中文文档网站发起人

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/weijunext">
        <img src="https://avatars.githubusercontent.com/weijunext" width="80px;" alt="weijunext"/>
        <br />
        <sub><b>文档维护<br/>weijunext</br></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/ErvingZheng">
        <img src="https://avatars.githubusercontent.com/ErvingZheng" width="80px;" alt="阿伟 dev"/>
        <br />
        <sub><b>网站开发<br/>阿伟 dev</br></sub>
      </a>
    </td>
  </tr>
</table>

## ⭐ Star History

如果这个项目对你有帮助，请给我们一个 Star ⭐

[![Star History Chart](https://api.star-history.com/svg?repos=ErvingZheng/open-nextjs-docs&type=Date)](https://star-history.com/#ErvingZheng/open-nextjs-docs&Date)

## 📄 开源协议

本项目采用 [MIT License with Attribution Requirement](./LICENSE)。

使用本项目代码时，请确保：

1. 保留版权声明
2. 在网站 Footer 或显著位置添加指向本仓库的链接
