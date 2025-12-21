"use client";

import { DISCORD_URL, JIKE_URL_1, siteConfig, WECHAT_URL } from "@/config/site";
import Link from "next/link";
import NextjsLogo from "@/components/icons/logo";
import { usePathname } from "next/navigation";
import "./hearder.css";
import { ArrowUpRight, Code, Menu, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { WeChat } from "@/components/social-icons/icons";
import Jike from "@/components/icons/jike";
import { MobileRightMenu } from "@/components/header/MobileRightMenu";
import DocSearch from "@/components/DocSearch";
import { BsDiscord } from "react-icons/bs";

export const RIGHT_BUTTONS = [
  {
    label: "Discord",
    href: DISCORD_URL,
    icon: BsDiscord,
    variant: "outline",
  },
  {
    label: "微信群",
    href: WECHAT_URL,
    icon: WeChat,
    variant: "outline",
  },
  {
    label: "全栈模板",
    href: "https://nexty.dev/zh",
    variant: "default",
  },
];

const Header = () => {
  const links = siteConfig.headerLinks;
  const pathname = usePathname();

  return (
    <header className="header hearder--sticky px-6">
      <nav className="navbar">
        <div className="navbar-links">
          <Link href="/" prefetch={false} className="flex gap-1 items-center">
            <svg
              aria-label="Vercel logomark"
              height="22"
              role="img"
              style={{ width: "auto", overflow: "visible" }}
              viewBox="0 0 74 64"
            >
              <path
                d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
                fill="var(--geist-foreground)"
              ></path>
            </svg>
            <svg height="32" role="separator" viewBox="0 0 32 32" width="32">
              <path
                d="M22 5L9 28"
                stroke="var(--accents-2)"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <NextjsLogo />
          </Link>
          {/* pc 中间目录 */}
          <div className="hidden lg:flex items-center gap-4">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                title={link.label}
                {...(link.target && { target: link.target })}
                {...(link.rel && { rel: link.rel })}
                prefetch={link.prefetch}
                className={`${
                  pathname?.startsWith(link.href) ? "navbar-link-active" : ""
                } flex items-center no-underline transition-colors duration-150 text-sm rounded-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary relative`}
              >
                {link.label}
                {link.target && link.target === "_blank" ? (
                  <ArrowUpRight className="ml-0 w-4 h-4" />
                ) : (
                  <></>
                )}
              </Link>
            ))}
          </div>
        </div>
        {/* pc 端右侧按钮 */}
        <div className="flex items-center gap-2">
          <DocSearch />
          <div className="hidden lg:flex items-center gap-2">
            {RIGHT_BUTTONS.map((button) => (
              <Link
                key={button.label}
                href={button.href}
                title={button.label}
                target="_blank"
                rel="noopener noreferrer nofollow"
                prefetch={false}
                className={cn(
                  buttonVariants({ variant: button.variant as any }),
                  "h-8 px-2",
                  button.variant === "outline"
                    ? "border-gray-300 dark:border-gray-700 text-primary hover:text-primary/90"
                    : "text-primary-foreground bg-primary hover:text-primary-foreground/90"
                )}
              >
                {button.icon && <button.icon className="mr-1 h-4 w-4" />}
                {button.label}
              </Link>
            ))}
          </div>
        </div>

        {/* 移动端右侧展开按钮 - 包含pc中间目录和右侧按钮 */}
        <div className="lg:hidden">
          <MobileRightMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;
