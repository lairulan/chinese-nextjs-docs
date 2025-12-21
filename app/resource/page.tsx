import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { sourceLinks } from "@/config/resource";
import SiteLinkForm from "@/app/resource/SiteLinkForm";

export async function generateMetadata() {
  return {
    ...siteConfig,
    title: `社区资源 | ${siteConfig.name}`,
    description: siteConfig.description,
    openGraph: {
      ...siteConfig.openGraph,
      title: `社区资源 | ${siteConfig.name}`,
      url: `${siteConfig.url}/resource`,
      description: siteConfig.description,
    },
    twitter: {
      ...siteConfig.twitter,
      title: `社区资源 | ${siteConfig.name}`,
      site: `${siteConfig.url}/resource`,
      description: siteConfig.description,
    },
  };
}

export default function Resource() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">社区资源</h1>
      <section className="space-y-12">
        {sourceLinks.map((category) => (
          <div key={category.id}>
            <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.links.map((link, linkIndex) => (
                <Link
                  href={link.url}
                  key={linkIndex}
                  className="block group"
                  target="_blank"
                  rel={link.rel || "noopener noreferrer nofollow"}
                  prefetch={false}
                >
                  <Card className="h-[200px] transition-all duration-300 group-hover:shadow-lg group-hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <img
                          src={`https://favicon.im/${link.url}`}
                          alt={`https://favicon.im/${link.url}`}
                          className="w-8 h-8"
                        />
                        <span className="truncate">{link.title}</span>
                      </CardTitle>
                      <CardDescription className="line-clamp-2 h-[40px]">
                        {link.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {link.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="px-3 py-1 text-sm bg-gray-100 text-gray-600 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
      <section className="mt-12 flex justify-center">
        <Card className="max-w-2xl w-full">
          <CardHeader>
            <CardTitle className="text-center">推荐资源</CardTitle>
            <CardDescription className="text-center">
              <p>
                欢迎推荐 Next.js 相关优质技术网站和博客<br></br>(邮箱：
                <a href="mailto:hi@nextjscn.org">hi@nextjscn.org</a>)
              </p>
            </CardDescription>
          </CardHeader>
        </Card>
      </section>
    </main>
  );
}
