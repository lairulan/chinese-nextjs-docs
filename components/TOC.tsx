"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BackToTop from "@/components/BackToTop";
import TocAD from "@/components/ad/TocAD";

const TOC = () => {
  const [headings, setHeadings] = useState<
    { text: string; id: string; level: number }[]
  >([]);
  const pathname = usePathname();
  useEffect(() => {
    const extractHeadings = () => {
      const articleElement = document.getElementById("article");
      if (!articleElement) return;

      const extractedHeadings = Array.from(
        articleElement.querySelectorAll(
          'h2[data-docs-heading="true"], h3[data-docs-heading="true"], h4[data-docs-heading="true"]'
        )
      ).map((heading) => ({
        text: heading.textContent || "",
        id: heading.id || "",
        level: Number(heading.nodeName.charAt(1)),
      }));
      setHeadings(extractedHeadings);
    };

    // 给浏览器一点时间来渲染新内容
    setTimeout(extractHeadings, 0);
  }, [pathname]);

  return (
    <>
      <nav className="order-last hidden w-56 shrink-0 lg:block">
        <div className="sticky top-[126px]">
          {headings.length ? (
            <div className="text-gray-1000 mb-1 mt-[7px] text-sm font-medium">
              On this page
            </div>
          ) : null}
          <div className="relative" data-docs-table-of-contents>
            <ul className="styled-scrollbar max-h-[40vh] space-y-2.5 overflow-y-auto py-2 text-sm">
              {headings.map(({ text, id, level }) => (
                <li key={id}>
                  <Link
                    href={`#${id}`}
                    title={text}
                    prefetch={false}
                    className="hover:text-gray-1000 block leading-[1.6] text-gray-900"
                    style={{ paddingLeft: 0.75 * (level - 2) + "rem" }}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <BackToTop />
          {process.env.NEXT_PUBLIC_SHOW_CUSTOM_AD === "1" ? <TocAD /> : <></>}
        </div>
      </nav>
    </>
  );
};

export default TOC;
