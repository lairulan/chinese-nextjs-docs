import { visit } from "unist-util-visit";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeExternalLinks from "rehype-external-links";
import mdxTheme from "./mdxTheme.json";
import { linkIconAst } from "./icons/linkIconAst";
import { externalLinkIconAst } from "./icons/externalLinkIconAst";

export const rehypeOptions = {
  parseFrontmatter: true,
  mdxOptions: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: mdxTheme,
        },
      ],
      () => (tree) => {
        visit(tree, "element", (node) => {
          if (node.tagName === "pre" && node.children[0]?.tagName === "code") {
            const [codeEl] = node.children;
            if (codeEl.data && codeEl.data.meta) {
              const meta = codeEl.data.meta;
              node.properties.meta = meta;
              // 解析 filename
              const filenameMatch = meta.match(/filename="?(.+?)"?(?:\s|$)/);
              if (filenameMatch) {
                node.properties.filename = filenameMatch[1];
              }
            }
          }
        });
      },
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ["nofollow", "noopener", "noreferrer"],
          protocols: ["http", "https"],
          content: {
            type: "element",
            tagName: "span",
            properties: { className: ["inline-flex"] },
            children: [externalLinkIconAst],
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["anchor-link"],
          },
          content: {
            type: "element",
            tagName: "span",
            properties: { className: ["anchor-icon"] },
            children: [linkIconAst],
          },
        },
      ],
    ],
  },
};
