"use client";

import { docSearchConfig } from "@/components/DocSearch/config";
import "@docsearch/css";
import { DocSearchModal, useDocSearchKeyboardEvents } from "@docsearch/react";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { IoIosSearch } from "react-icons/io";
import "./docSearch.css";

export default function CustomDocSearch() {
  const { appId, indexName, apiKey } = docSearchConfig.docSearch;
  const [isOpen, setIsOpen] = useState(false);
  const [isMac, setIsMac] = useState(false);
  const searchButtonRef = useRef<HTMLButtonElement>(null);

  // 检查配置是否完整
  const isConfigValid = appId && indexName && apiKey;

  const onOpen = useCallback(() => {
    if (!isConfigValid) return;
    setIsOpen(true);
  }, [setIsOpen, isConfigValid]);

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  useDocSearchKeyboardEvents({
    isOpen,
    onOpen,
    onClose,
    searchButtonRef,
  });

  // 添加检测操作系统的效果
  useEffect(() => {
    setIsMac(navigator.platform.toUpperCase().indexOf("MAC") >= 0);
  }, []);

  // 配置缺失时输出警告并不渲染组件
  useEffect(() => {
    if (!isConfigValid) {
      const missing: string[] = [];
      if (!appId) missing.push("NEXT_PUBLIC_DOC_SEARCH_APP_ID");
      if (!indexName) missing.push("NEXT_PUBLIC_DOC_SEARCH_INDEX_NAME");
      if (!apiKey) missing.push("NEXT_PUBLIC_DOC_SEARCH_API_KEY");
      console.warn(
        `[DocSearch] 缺少必要的配置参数: ${missing.join(", ")}。搜索功能已禁用。`
      );
    }
  }, [isConfigValid, appId, indexName, apiKey]);

  // 配置不完整时不渲染
  if (!isConfigValid) {
    return null;
  }

  return (
    <>
      <button className="docSearch-btn" data-variant="large" onClick={onOpen}>
        搜索文档<kbd>{isMac ? "⌘K" : "Ctrl+K"}</kbd>
      </button>
      <button className="docSearch-btn" data-variant="medium" onClick={onOpen}>
        搜索<kbd>{isMac ? "⌘K" : "Ctrl+K"}</kbd>
      </button>
      <button
        className="docSearch-btn mr-2 hover:bg-accent border border-gray-300"
        data-variant="small"
        onClick={onOpen}
      >
        <IoIosSearch />
      </button>
      {isOpen &&
        createPortal(
          <DocSearchModal
            initialScrollY={window.scrollY}
            appId={appId}
            apiKey={apiKey}
            indexName={indexName}
            onClose={onClose}
            placeholder="搜索文档"
            searchParameters={{}}
            hitComponent={({ hit, children }) => (
              <Link href={hit.url} prefetch={false}>
                {children}
              </Link>
            )}
          />,
          document.body
        )}
    </>
  );
}
