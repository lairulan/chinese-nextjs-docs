"use client";

import { usePathname, useRouter } from "next/navigation";

import appIndex from "@/json/appIndex.json";
import pagesIndex from "@/json/pagesIndex.json";
import { useGlobalState } from "@/components/GlobalStateProvider";
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ModeSelect() {
  const { setRouterMode, routerMode } = useGlobalState();

  const router = useRouter();
  function AppIcon() {
    return (
      <div className="rounded-md border border-blue-400 bg-gradient-to-b from-white to-blue-400 p-1.5 text-blue-700 dark:from-black dark:to-blue-400 h-10 flex items-center">
        <svg
          data-testid="geist-icon"
          fill="none"
          height="24"
          shapeRendering="geometricPrecision"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width="24"
          style={{
            color: "currentColor",
            width: "20px",
            height: "20px",
          }}
        >
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"></path>
          <path d="M3.27 6.96L12 12.01l8.73-5.05"></path>
          <path d="M12 22.08V12"></path>
        </svg>
      </div>
    );
  }

  function PageIcon() {
    return (
      <div className="dark:border-purple-4000 rounded-md border border-purple-400 bg-gradient-to-b from-white to-purple-300 p-1.5 text-purple-700 dark:from-black dark:to-purple-400 h-10 flex items-center">
        <svg
          data-testid="geist-icon"
          fill="none"
          height="24"
          shapeRendering="geometricPrecision"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width="24"
          style={{
            color: "currentColor",
            width: "20px",
            height: "20px",
          }}
        >
          <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"></path>
          <path d="M13 2v7h7"></path>
        </svg>
      </div>
    );
  }

  const modes = [
    {
      id: "app",
      name: "Using App Router",
      description: "Features available in /app",
      icon: AppIcon,
    },
    {
      id: "pages",
      name: "Using Pages Router",
      description: "Features available in /pages",
      icon: PageIcon,
    },
  ];

  const [selectedKeys, setKeys] = useState([routerMode]);

  useEffect(() => {
    setKeys([routerMode]);
  }, [routerMode]);

  let currentPath = usePathname();
  let allSlugs: string[] = [];
  allSlugs = Array.from(new Set(allSlugs.concat(appIndex, pagesIndex)));

  function findMatchingRoute(newKey, routes) {
    // 将当前路径转换为数组
    const pathParts = currentPath.split("/").filter(Boolean);

    const oldKey = newKey === "app" ? "pages" : "app";
    // 替换 'pages' 为 'app'
    const index = pathParts.indexOf(oldKey);
    if (index !== -1) {
      pathParts[index] = newKey;
    }

    // 从完整路径开始，逐步往上检查
    while (pathParts.length >= 3) {
      // 确保至少到 "/docs/app"
      const testPath = "/" + pathParts.join("/");

      if (routes.includes(testPath)) {
        return testPath;
      }

      // 移除最后一个路径段
      pathParts.pop();
    }

    // 如果没有找到匹配的路径，返回 "/docs/app"
    return `/docs/${newKey}`;
  }

  function handleValueChange(value) {
    setRouterMode(value);

    if (
      !currentPath.startsWith("/docs/app") &&
      !currentPath.startsWith("/docs/pages")
    ) {
      return;
    }

    const newPath = findMatchingRoute(value, allSlugs);
    router.push(newPath);
  }

  return (
    <Select value={routerMode} onValueChange={handleValueChange}>
      <SelectTrigger className="p-1 h-[60px] bg-transparent border-none shadow-none hover:text-foreground hover:bg-default-100 dark:hover:bg-default-50 focus:bg-default-50 focus:ring-default-500 w-full">
        <SelectValue>
          {modes.find((mode) => mode.id === routerMode) && (
            <div className="flex items-center gap-2">
              {modes.find((mode) => mode.id === routerMode)?.icon()}
              <div className="flex flex-col">
                <span className="font-medium text-left">
                  {modes.find((mode) => mode.id === routerMode)?.name}
                </span>
                <span className="text-tiny">
                  {modes.find((mode) => mode.id === routerMode)?.description}
                </span>
              </div>
            </div>
          )}
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="p-0 border-small border-divider rounded-small shadow-sm shadow-transparent">
        {modes.map((mode) => (
          <SelectItem
            key={mode.id}
            value={mode.id}
            className="text-gray-900 dark:text-gray-100 hover:bg-default-100 dark:hover:bg-default-50 focus:bg-default-50 rounded-middle py-0 flex justify-between items-center"
          >
            <div className="flex gap-2 items-center rounded-small py-1">
              {mode.icon()}
              <div className="flex flex-col">
                <span className="text-small font-medium text-slate-900 dark:text-gray-100">
                  {mode.name}
                </span>
                <span className="text-tiny text-gray-500">
                  {mode.description}
                </span>
              </div>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
