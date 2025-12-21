"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export function ThemeAwareImage({ srcLight, srcDark, alt, ...props }) {
  const { resolvedTheme } = useTheme();
  const [imageSrc, setImageSrc] = useState(
    "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
  ); // 默认使用亮色主题图片

  const host = process.env.NEXT_PUBLIC_ASSETS_URL || "/assets";
  // srcDark 判断是否有 /docs 和 /learn 前缀，有的话，去掉 /docs 和 /learn 前缀
  if (srcDark.startsWith("/docs")) {
    srcDark = srcDark.slice(5);
  }
  if (srcLight.startsWith("/docs")) {
    srcLight = srcLight.slice(5);
  }
  if (srcDark.startsWith("/learn")) {
    srcDark = srcDark.slice(6);
  }
  if (srcLight.startsWith("/learn")) {
    srcLight = srcLight.slice(6);
  }

  useEffect(() => {
    if (resolvedTheme === "dark") {
      setImageSrc(`${host}${srcDark}`);
    } else {
      setImageSrc(`${host}${srcLight}`);
    }
  }, [resolvedTheme, srcLight, srcDark]);

  return (
    <figure>
      <Image
        className="block rounded-md border border-gray-200 bg-gray-100"
        src={imageSrc}
        {...props}
        alt={alt || ""}
      />
      {/* <img
        className="block rounded-md border border-gray-200 bg-gray-100"
        src={imageSrc}
        {...props}
        alt={alt || ""}
      /> */}
    </figure>
  );
}
