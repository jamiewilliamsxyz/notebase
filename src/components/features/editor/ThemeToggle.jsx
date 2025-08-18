import { useContext, useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { ThemeContext } from "../../../context/ThemeContext";

export const ThemeToggle = () => {
  const { toggleTheme, theme } = useContext(ThemeContext);

  const [initialTheme, setInitialTheme] = useState("light");

  useEffect(() => {
    if (!theme || theme === "light") {
      setInitialTheme("light");
    } else if (theme === "dark") {
      setInitialTheme("dark");
    }
  }, []);

  return (
    <div className="fixed bottom-1 right-2 w-fit h-fit p-2">
      <label className="swap swap-rotate">
        <input
          aria-label="Toggle Theme"
          type="checkbox"
          onChange={toggleTheme}
        />
        <Moon
          className={`${
            initialTheme === "dark" ? "swap-on" : "swap-off"
          } text-base-300  w-6 h-6"`}
        />
        <Sun
          className={`${
            initialTheme === "light" ? "swap-on" : "swap-off"
          } text-white  w-6 h-6 `}
        />
      </label>
    </div>
  );
};
