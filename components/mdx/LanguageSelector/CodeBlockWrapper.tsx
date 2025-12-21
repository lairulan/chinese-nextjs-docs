"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { FileType } from "@/types/mdxDocument";

interface CodeBlockWrapperProps {
  language: string;
  children: React.ReactNode;
}

const CodeBlockWrapper: React.FC<CodeBlockWrapperProps> = ({
  language,
  children,
}) => {
  const { globalLanguage } = useLanguage();

  // Map ts/js to tsx/jsx for comparison with globalLanguage
  const languageFamily =
    language === FileType.TS
      ? FileType.TSX
      : language === FileType.JS
      ? FileType.JSX
      : language;

  // Compare the language family with globalLanguage
  if (
    (language === FileType.TSX ||
      language === FileType.JSX ||
      language === FileType.TS ||
      language === FileType.JS) &&
    globalLanguage.replace(/x$/, "") !== language.replace(/x$/, "")
  ) {
    return null;
  }

  return <>{children}</>;
};

export default CodeBlockWrapper;
