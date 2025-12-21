"use client";
import type { DocsLink } from "@/types/siteConfig";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuGroup({
  group,
  children,
}: {
  group: DocsLink;
  children?: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <ul className="last-of-type:pb-3">
      <li className="my-1.5 ml-[3px]">
        <Link
          className={`hover:text-gray-1000 relative flex w-full cursor-pointer items-center justify-between rounded-md py-1 pl-2 text-left text-sm  font-medium ${
            pathname === group.href
              ? "font-medium text-blue-500"
              : "text-gray-1000"
          }`}
          href={group.href}
          title={group.label}
          prefetch={false}
        >
          {group.label}
        </Link>
        {children}
      </li>
    </ul>
  );
}
