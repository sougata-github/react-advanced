/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

type themeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<themeContextType | undefined>(undefined);

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [isDark, setIsDark] = useLocalStorage<boolean>("isDark", prefersDark);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const value = useContext(ThemeContext);

  if (value === undefined) {
    throw new Error("Context was used outside provider");
  }

  return value;
}
