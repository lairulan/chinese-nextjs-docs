"use client";

import { useGlobalState } from "@/components/GlobalStateProvider";

export function AppOnly({ children }) {
  const { routerMode } = useGlobalState();
  return routerMode === "app" ? <>{children}</> : null;
}
