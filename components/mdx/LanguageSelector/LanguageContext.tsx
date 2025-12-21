"use client";

import React, { createContext, useState, useContext, ReactNode } from "react";

type LanguageContextType = {
  globalLanguage: string;
  setGlobalLanguage: (language: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{
  children: ReactNode;
  initialLanguage?;
}> = ({ children, initialLanguage = "tsx" }) => {
  const [globalLanguage, setGlobalLanguage] = useState(initialLanguage);

  return (
    <LanguageContext.Provider value={{ globalLanguage, setGlobalLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
