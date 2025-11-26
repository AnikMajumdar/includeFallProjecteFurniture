"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Read initial theme synchronously on first render to avoid
  // rendering children before the provider is available.
  const getInitialTheme = () => {
    try {
      const saved = localStorage.getItem("theme");
      return saved === "dark";
    } catch (err) {
      // localStorage may be unavailable for some environments
      return false;
    }
  };

  const [isDark, setIsDark] = useState<boolean>(getInitialTheme);

  // Keep html[data-theme] in sync when `isDark` changes
  useEffect(() => {
    const themeValue = isDark ? "dark" : "light";
    try {
      localStorage.setItem("theme", themeValue);
    } catch (err) {
      /* ignore */
    }
    document.documentElement.setAttribute("data-theme", themeValue);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
