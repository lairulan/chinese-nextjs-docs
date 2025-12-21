"use client";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";

import { FiMonitor, FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
import "./themeButton.css";

import { useTheme } from "next-themes";

export function ThemedButton() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="theme-switcher flex p-[3px] items-center">
      <Button
        size="sm"
        isIconOnly
        data-active={theme === "light"}
        onClick={() => setTheme("light")}
      >
        <FiSun></FiSun>
      </Button>
      <Button
        size="sm"
        isIconOnly
        data-active={theme === "system"}
        onClick={() => setTheme("system")}
      >
        <FiMonitor></FiMonitor>
      </Button>
      <Button
        size="sm"
        isIconOnly
        data-active={theme === "dark"}
        onClick={() => setTheme("dark")}
      >
        <IoMoonOutline></IoMoonOutline>
      </Button>
    </div>
  );
}
