# Next.js 中文文档

> 更新至 2024.10.29

## 翻译注意事项

- 全局搜索 ](/learn/ 和 ](/blog/，分别替换成 https://nextjs.org/learn/ 和 https://nextjs.org/blog/
- docs/index 和 community/index 都添加中文文档交流群引流

## 翻译后的工作

更新目录文件：SideNavigation，  scripts/generateMenu.ts  generateOrderIndex.ts


执行 `npm run prebuild`

或下面两行

执行 `npx ts-node scripts/generateMenu.ts` 生成 menuLink.ts

执行 `npm run generate-order-index` 生成 所需的json文件

## source 处理

- 搜索 source: app/ , 替换成 source: /docs/app/

## 图片 url 处理 ⚠️

- 搜索 /learn/light/ 和 /learn/dark/ ，替换为 /light/ 和 /dark/
- 搜索 /docs/light/ 和 /docs/dark/ ，替换为 /light/ 和 /dark/

可以不做手动处理，ThemeAwareImage 组件以已经处理了

## 更新文档图片

脚本下载图片，压缩，上传r2

## 更新重定向

根据 appIndex.json 和 pagesIndex.json 删除的路径补充