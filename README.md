# Next.js 中文文档

> 更新至 2024.10.29

## 翻译注意事项

- 全局搜索 ](/learn/ 和 ](/blog/，分别替换成 https://nextjs.org/learn/ 和 https://nextjs.org/blog/
- docs/index 和 community/index 都添加中文文档交流群引流

## 翻译后的工作

更新目录文件：SideNavigation， scripts/generateMenu.ts generateOrderIndex.ts

执行 `npm run prebuild`

或下面两行

执行 `npx ts-node scripts/generateMenu.ts` 生成 menuLink.ts

执行 `npm run generate-order-index` 生成 所需的 json 文件

## source 处理

- 搜索 source: app/ , 替换成 source: /docs/app/

## 图片 url 处理 ⚠️

- 搜索 /learn/light/ 和 /learn/dark/ ，替换为 /light/ 和 /dark/
- 搜索 /docs/light/ 和 /docs/dark/ ，替换为 /light/ 和 /dark/

可以不做手动处理，ThemeAwareImage 组件以已经处理了

## 更新文档图片

脚本下载图片，压缩，上传 r2

## 更新重定向

根据 appIndex.json 和 pagesIndex.json 删除的路径补充

## 📄 开源协议

本项目采用 **MIT 协议的修改版本**，允许商业使用，但有以下额外要求：

### 使用条件

1. **可以商业使用** - 你可以将此代码用于商业项目
2. **必须保留版权声明** - 在代码中保留原始的版权声明
3. **必须在 footer 中添加 GitHub 仓库链接** - 任何使用此代码的网站都必须在页面底部显著位置添加指向本项目 GitHub 仓库的链接

### GitHub 仓库链接要求

使用本项目代码的网站必须在每个页面的 footer 或其他显著位置包含以下链接：

```html
<a
  href="https://github.com/ErvingZheng/open-nextjs-docs"
  target="_blank"
  rel="noopener noreferrer"
>
  GitHub 仓库
</a>
```

### 为什么有这个要求？

这个要求有助于：

- 让更多开发者发现和受益于这个开源项目
- 支持开源社区的发展
- 为项目维护者提供反馈和贡献的渠道

详细协议内容请查看 [LICENSE](./LICENSE) 文件。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 👥 维护者

- [@weijunext](https://github.com/weijunext)
- [@awei_dev](https://github.com/awei_dev)
