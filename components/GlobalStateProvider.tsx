"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { usePathname } from "next/navigation";

type RouterMode = "app" | "pages";

interface GlobalStateContextType {
  routerMode: RouterMode;
  setRouterMode: React.Dispatch<React.SetStateAction<RouterMode>>;
}

const GlobalStateContext = createContext<GlobalStateContextType | undefined>(
  undefined
);

interface GlobalStateProviderProps {
  children: ReactNode;
}

function initializeRouterMode(pathname: string): RouterMode {
  if (pathname.startsWith("/docs/app")) {
    return "app";
  }
  if (pathname.startsWith("/docs/pages")) {
    return "pages";
  }
  return "app";
}

export function GlobalStateProvider({ children }: GlobalStateProviderProps) {
  const pathname = usePathname();
  const [routerMode, setRouterMode] = useState<RouterMode>(() =>
    initializeRouterMode(pathname)
  );

  useEffect(() => {
    if (
      pathname.startsWith("/docs/app") ||
      pathname.startsWith("/docs/pages")
    ) {
      const newMode = initializeRouterMode(pathname);
      setRouterMode(newMode);
    }
  }, [pathname]);

  const value = {
    routerMode,
    setRouterMode,
  };

  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
}

export function useGlobalState() {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
}
