"use client";

import { useGlobalState } from "@/components/GlobalStateProvider";

export function PagesOnly({ children }) {
  const { routerMode } = useGlobalState();
  return routerMode === "pages" ? <>{children}</> : null;
}
