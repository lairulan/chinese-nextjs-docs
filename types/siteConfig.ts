import { LinkProps } from "next/link";

export type AuthorsConfig = {
  name: string;
  url: string;
  twitter: string;
  jike: string;
};
export type ProductLink = {
  url: string;
  name: string;
};
export type Link = {
  prefetch?: boolean | undefined;
  label: string;
  href: string;
  rel?: string;
  target?: string;
};
export type ThemeColor = {
  media: string;
  color: string;
};
export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  keywords: string[];
  authors: AuthorsConfig[];
  creator: string;
  ogImage?: string;
  headerLinks: Link[];
  footerLinks: {
    label: string;
    links: Link[];
    prefetch?: boolean;
    target?: string;
    rel?: string;
  }[];
  metadataBase: URL | string;
  themeColors?: string | ThemeColor[];
  defaultNextTheme?: string;
  icons: {
    icon: string;
    shortcut?: string;
    apple?: string;
  };
  openGraph?: {
    type: string;
    locale: string;
    url: string;
    title: string;
    description: string;
    siteName: string;
    images?: string[];
  };
  twitter?: {
    card: string;
    site: string;
    title: string;
    description: string;
    images?: string[];
    creator: string;
  };
};

export type DocsLink = {
  label: string;
  href: string;
  isGroup?: boolean;
  children?: DocsLink[];
  version?: string;
};
