"use client";

import { IoChevronDownOutline } from "react-icons/io5";
import { useLanguage } from "./LanguageContext";

const labelMap = {
  jsx: "JavaScript",
  tsx: "TypeScript",
  js: "JavaScript",
  ts: "TypeScript",
};

const LanguageSelector = () => {
  const { globalLanguage, setGlobalLanguage } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGlobalLanguage(e.target.value);
  };

  return (
    <div className="switcher-container">
      <div className="switcher-visible">
        <span>{labelMap[globalLanguage]}</span>
        <IoChevronDownOutline style={{ fontSize: "16px" }} />
      </div>
      <select
        value={globalLanguage}
        onChange={handleChange}
        className="switcher-select"
      >
        <option value="tsx">TypeScript</option>
        <option value="jsx">JavaScript</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
