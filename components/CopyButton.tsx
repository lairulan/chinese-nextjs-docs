"use client";

import { useState, useCallback } from "react";
import { LuCopy } from "react-icons/lu";
import { IoCheckmarkSharp } from "react-icons/io5";

const CopyButton = ({ text, className }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = useCallback(() => {
    navigator.clipboard.writeText(text).then(() => setIsCopied(true));
    setTimeout(() => setIsCopied(false), 1000);
  }, [text]);

  return (
    <button className={className} onClick={copy}>
      {isCopied ? <IoCheckmarkSharp /> : <LuCopy />}
    </button>
  );
};

export default CopyButton;
