import { MdxData } from "@/types/mdxDocument";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

let mdxFiles: string[] = [];
export let mdxCache: MdxData[] = [];
async function readAllFilesRecursively(directoryPath: string) {
  try {
    const files = await fs.promises.readdir(directoryPath);

    for (const file of files) {
      const filePath = path.join(directoryPath, file);
      const stats = await fs.promises.stat(filePath);

      if (stats.isDirectory()) {
        await readAllFilesRecursively(filePath);
      } else {
        mdxFiles.push(filePath);
      }
    }
  } catch (err) {
    console.error("Error reading directory:", err);
  }
}

export async function fetchMdxContent(): Promise<{
  posts: MdxData[];
}> {
  if (mdxCache.length > 0) {
    return { posts: mdxCache };
  }

  mdxFiles = [];

  const mdxDirectory = path.join(process.cwd(), "content");
  await readAllFilesRecursively(mdxDirectory);
  mdxFiles = Array.from(new Set(mdxFiles));
  const posts = await Promise.all(
    mdxFiles.map(async (filePath) => {
      const fileContents = await fs.promises.readFile(filePath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        id: data.slug,
        metadata: data, // slug/url title
        nav_title: data.nav_title,
        version: data.version || undefined,
        title: data.title,
        source: data.source,
        slug: data.slug,
        description: data.description || "",
        content,
      };
    })
  );

  mdxCache = posts;
  return {
    posts,
  };
}
