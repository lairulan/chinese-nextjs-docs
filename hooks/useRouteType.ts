"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

export function useRouteType() {
  const pathname = usePathname();

  const routeType = useMemo(() => {
    if (pathname.startsWith("/docs/pages")) {
      return "pages";
    } else {
      return "app";
    }
  }, [pathname]);

  return routeType;
}
