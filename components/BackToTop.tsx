import { ArrowUp } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = useCallback(() => {
    if (typeof window !== "undefined") {
      setIsVisible(window.scrollY > 300);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", toggleVisibility);
      return () => window.removeEventListener("scroll", toggleVisibility);
    }
  }, [toggleVisibility]);

  const scrollToTop = useCallback(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, []);

  return (
    <>
      <div
        className={`mt-3 space-y-2 border-t border-gray-200 pt-5 text-sm text-gray-900 dark:border-gray-300 transition-display ${
          isVisible ? "block" : "hidden"
        } `}
      ></div>
      <button
        onClick={scrollToTop}
        className={`hover:text-gray-1000 flex items-center gap-x-1.5 text-sm text-gray-900 transition-display ${
          isVisible ? "block" : "hidden"
        } `}
      >
        Scroll to top <ArrowUp className="w-4 h-4" />
      </button>
    </>
  );
}
