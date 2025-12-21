import { MousePointerClickIcon } from "lucide-react";
import Link from "next/link";

const adInfo = {
  href: "https://ntab.dev/?utm_source=nextjscn",
  rel: "noopener noreferrer",
  title: "ntab.dev",
  logo: "/assets/ntab-logo.svg",
  description: "提升效率的新标签页组件",
};

export function AdBanner() {
  return (
    <Link
      href={adInfo.href}
      target="_blank"
      rel={adInfo.rel}
      className="w-full max-w-7xl mx-auto px-6 lg:px-8 border cursor-pointer hover:ring-[3px] hover:ring-border/50 hover:border-ring focus-visible:outline-hidden focus-visible:ring-[3px] focus-visible:ring-border/50 focus-visible:border-ring group/button relative z-50 flex items-center justify-between gap-3 py-2 bg-card hover:bg-accent lg:rounded-b-lg"
    >
      <span className="text-primary bg-background rounded-sm border border-border hover:[&[href]]:bg-accent hover:[&[type]]:bg-accent px-1.5 py-0.5 gap-1.5 text-xs leading-none max-sm:order-last">
        Sponsor
      </span>

      <div className="text-xs leading-tight text-secondary-foreground mr-auto md:text-sm flex items-center">
        <img
          alt={adInfo.title}
          loading="lazy"
          className="flex float-left align-middle mr-1.5 size-3.5 rounded-sm md:size-4"
          src={adInfo.logo}
        />
        <strong className="font-medium text-foreground pr-1">
          {adInfo.title}
        </strong>{" "}
        —{adInfo.description}
      </div>

      <span className="border cursor-pointer hover:ring-[3px] hover:ring-border/50 focus-visible:outline-hidden focus-visible:ring-[3px] focus-visible:ring-border/50 focus-visible:border-ring group/button relative inline-flex items-center justify-center font-medium text-[0.8125rem] text-start rounded-md overflow-clip hover:z-10 disabled:opacity-60 disabled:pointer-events-none border-border bg-background text-secondary-foreground hover:bg-card hover:border-ring px-2 py-1 gap-[0.66ch] shrink-0 leading-none pointer-events-none max-sm:hidden">
        <span className="flex-1 truncate only:text-center has-[div]:contents flex items-center gap-1">
          <MousePointerClickIcon className="size-4" /> 点击查看
        </span>
      </span>
    </Link>
  );
}
