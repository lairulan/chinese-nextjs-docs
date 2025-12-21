import DocsPagination from "@/components/DocsPagination";
import DocsRelated from "@/components/DocsRelated";
import { getVersionIcon } from "@/components/SideNavigation/VersionIcon";
import MDXComponents from "@/components/mdx/MDXComponents";
import { rehypeOptions } from "@/components/mdx/rehypeOptions";
import { siteConfig } from "@/config/site";
import appIndex from "@/json/appIndex.json";
import hasChildren from "@/json/hasChildren.json";
import pagesIndex from "@/json/pagesIndex.json";
import { fetchMdxContent } from "@/lib/mdxLoader";
import { MdxData } from "@/types/mdxDocument";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}) {
  const slug = params.slug ? "/docs" + "/" + params.slug.join("/") : "/docs";
  let { posts }: { posts: MdxData[] } = await fetchMdxContent();
  const post = posts.find((item) => item.slug === slug);

  return {
    ...siteConfig,
    title: `${post?.nav_title || post?.title || "404"} | ${siteConfig.name}`,
    description: post?.description || siteConfig.description,
    alternates: post?.source
      ? {
          canonical: `${process.env.NEXT_PUBLIC_SITE_URL}${
            post.source.startsWith("/") ? post.source : "/" + post.source
          }`,
        }
      : post?.slug
      ? {
          canonical: `${process.env.NEXT_PUBLIC_SITE_URL}${
            post.slug.startsWith("/") ? post.slug : "/" + post.slug
          }`,
        }
      : null,
    openGraph: {
      ...siteConfig.openGraph,
      title: `${post?.nav_title || post?.title || "404"} | ${siteConfig.name}`,
      url: `${siteConfig.url}${slug}`,
      description: post?.description || siteConfig.description,
    },
    twitter: {
      ...siteConfig.twitter,
      title: `${post?.nav_title || post?.title || "404"} | ${siteConfig.name}`,
      site: `${siteConfig.url}${slug}`,
      description: post?.description || siteConfig.description,
    },
  };
}

export default async function Docs({ params }: { params: { slug: string[] } }) {
  const slug = params.slug ? "/docs" + "/" + params.slug.join("/") : "/docs";
  let { posts }: { posts: MdxData[] } = await fetchMdxContent();
  const post = posts.find((item) => item.slug === slug);

  if (post?.source) {
    const normalizedSource = post.source.startsWith("/")
      ? post.source
      : "/" + post.source;
    const sourcePost = posts.find((item) => item.slug === normalizedSource);
    post.content = sourcePost?.content || "";
  }

  // 查找当前索引，用于上下页
  const indexJson = slug.startsWith("/docs/pages") ? pagesIndex : appIndex;
  const index = indexJson.findIndex((item) => item === slug);
  const preLink = indexJson[index - 1]
    ? posts.find((item) => item.slug === indexJson[index - 1])
    : null;
  const nextLink = indexJson[index + 1]
    ? posts.find((item) => item.slug === indexJson[index + 1])
    : null;
  let related = post?.metadata.related;

  // 相关索引
  let linkList: Record<string, any>[] = [];
  if (related && related.links?.length) {
    linkList = posts
      .filter((item) => {
        const links = related.links.map((link) => "/docs/" + link);
        return links.includes(item.slug);
      })
      .map((item) => {
        const { content, ...rest } = item;
        return { ...rest };
      });
  }

  const children = hasChildren[slug];
  let childrenLinks: any[] = [];
  if (children) {
    children.forEach((item) => {
      const child = posts.find((i) => item === i.slug);
      if (child) {
        const { content, ...rest } = child;
        childrenLinks.push({
          ...rest,
        });
      }
    });
  }

  return (
    <>
      <div className="prose prose-vercel max-w-none">
        {post?.title && (
          <h1 className="break-words pt-4 md:pt-0 flex items-center gap-2">
            {post.title}{" "}
            {post.version && (
              <span className="text-gray-500">
                {getVersionIcon({
                  version: post.version,
                  className: "w-6 h-6",
                })}
              </span>
            )}
          </h1>
        )}
        <MDXRemote
          source={post?.content || ""}
          components={MDXComponents}
          options={rehypeOptions as any}
        />
      </div>
      {childrenLinks.length ? (
        <DocsRelated related={related} linkList={childrenLinks} />
      ) : null}
      {related ? <DocsRelated related={related} linkList={linkList} /> : null}
      <DocsPagination preLink={preLink} nextLink={nextLink} />
    </>
  );
}

export async function generateStaticParams() {
  let posts = (await fetchMdxContent()).posts;

  // Filter out posts without a slug
  posts = posts.filter((post) => post.slug);

  return posts.map((post) => {
    // Remove the leading '/docs' from the slug and split the rest into an array
    const slugArray = post.slug
      ?.replace(/^\/docs/, "")
      .split("/")
      .filter(Boolean);

    return {
      slug: slugArray,
    };
  });
}
