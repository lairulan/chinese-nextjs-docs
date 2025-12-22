import { Newsletter } from "@/components/footer/Newsletter";
import NextjsLogo from "@/components/icons/logo";
import { ThemedButton } from "@/components/theme/ThemedButton";
import { siteConfig } from "@/config/site";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import "./Footer.css";

const Footer = () => {
  const categories = siteConfig.footerLinks;
  return (
    <div className="footer_root">
      <div className="geist-wrapper">
        <footer className="geist">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 lg:gap-12">
            <div className="md:col-span-2">
              <Link href="/" title="首页" className="inline-block">
                <NextjsLogo />
              </Link>

              <Newsletter />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 lg:col-span-4">
              {categories.map((category) => (
                <div key={category.label}>
                  <div className="mb-3 font-semibold">{category.label}</div>
                  {category.links.map((link) => (
                    <Link
                      key={link.label}
                      title={link.label}
                      href={link.href}
                      {...(link.target && { target: link.target })}
                      {...(link.rel && { rel: link.rel })}
                      prefetch={link.prefetch}
                      className="flex items-center gap-1 hover:text-primary mb-2"
                    >
                      <span>{link.label}</span>
                      {link.target === "_blank" && (
                        <ArrowUpRight className="w-3 h-3" />
                      )}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between mt-12">
            <div className="flex items-center text-sm footer_copyright">
              <div>© 2024 weijunext & 阿伟dev.</div>
              <div className="ml-4">
                <Link
                  href="https://github.com/ErvingZheng/chinese-nextjs-docs"
                  title="GitHub 仓库"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="flex items-center gap-1 hover:text-primary"
                >
                  <span>GitHub 仓库</span>
                  <ArrowUpRight className="w-3 h-3" />
                </Link>
              </div>
              {/* <div className="flex items-center gap-2">
                {siteConfig.authors.map((author) => (
                  <Link
                    key={author.name}
                    href={author.twitter}
                    title={author.name}
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                  >
                    <TwitterX className="w-4 h-4" />
                  </Link>
                ))}
                {siteConfig.authors.map((author) => (
                  <Link
                    key={author.name}
                    href={author.jike}
                    title={author.name}
                    rel="noopener noreferrer nofollow"
                    target="_blank"
                  >
                    <Jike className="w-4 h-4" />
                  </Link>
                ))}
              </div> */}
            </div>
            <ThemedButton></ThemedButton>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
