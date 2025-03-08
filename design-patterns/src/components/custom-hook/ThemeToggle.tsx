import { twMerge } from "tailwind-merge";
import { Moon, Sun } from "lucide-react";

import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="p-4">
      {
        <button
          onClick={toggleTheme}
          className="p-2 dark:bg-white/10 bg-black/10 rounded-lg cursor-pointer"
        >
          <Sun className={twMerge("size-4 hidden", isDark && "block")} />
          <Moon className={twMerge("size-4 block", isDark && "hidden")} />
        </button>
      }
    </div>
  );
};

export default ThemeToggle;
