"use client";

import { getVersionIcon } from "@/components/SideNavigation/VersionIcon";
import type { DocsLink } from "@/types/siteConfig";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

// 递归检查是否有活动的子项
function isAnyChildActive(item: DocsLink, currentPath: string): boolean {
  if (currentPath.startsWith(item.href)) {
    return true;
  }
  if (item.children) {
    return item.children.some((child) => isAnyChildActive(child, currentPath));
  }
  return false;
}

export default function MenuItem({
  link,
  children,
}: {
  link: DocsLink;
  children?: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const hasChildren = link.children && link.children.length > 0;
  const isChildActive = hasChildren && isAnyChildActive(link, pathname);
  const [isOpen, setIsOpen] = useState(isChildActive);

  const toggleAccordion = (url: string) => {
    if (url !== pathname) {
      router.push(url);
      setIsOpen(true);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const variants = {
    open: { opacity: 1, height: "auto" },
    collapsed: { opacity: 0, height: 0 },
  };

  function toggleButton() {
    return isOpen ? (
      <FiChevronDown></FiChevronDown>
    ) : (
      <FiChevronRight></FiChevronRight>
    );
  }

  return (
    <li className="my-1.5">
      <Link
        className={`hover:text-gray-1000 relative flex w-full cursor-pointer items-center justify-between rounded-md py-1 pl-2 text-left text-sm ${
          pathname === link.href ? "font-medium text-blue-700" : "text-gray-900"
        }`}
        href={link.href}
        title={link.label}
        prefetch={false}
        onClick={(e) => {
          e.preventDefault();
          toggleAccordion(link.href);
        }}
        scroll={false}
      >
        {pathname === link.href ? (
          <div
            aria-hidden
            className="absolute -left-[13px] bottom-0 top-0 w-[1px] bg-blue-600"
          ></div>
        ) : null}
        <div className="flex items-center gap-1">
          {link.label}{" "}
          {link.version ? (
            <span>
              {getVersionIcon({
                version: link.version,
                className: "w-4 h-4",
              })}
            </span>
          ) : null}
        </div>
        {children && toggleButton()}
      </Link>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={variants}
            transition={{ duration: 0.15 }}
            style={{ overflow: "hidden" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
