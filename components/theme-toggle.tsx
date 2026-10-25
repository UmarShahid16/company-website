"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/icon";

const themeKey = "us-digital-solutions-theme";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem(themeKey);
    const shouldUseDarkTheme = savedTheme
      ? savedTheme === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;

    setIsDark(shouldUseDarkTheme);
    if (savedTheme) {
      document.documentElement.dataset.theme = savedTheme;
    }
  }, []);

  function toggleTheme() {
    const nextTheme = isDark ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem(themeKey, nextTheme);
    setIsDark(nextTheme === "dark");
  }

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      aria-pressed={isDark}
      onClick={toggleTheme}
      className={`button-gold px-3 text-xs ${className}`}
    >
      <Icon name={isDark ? "moon" : "sun"} className="size-4" />
      <span>{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}
