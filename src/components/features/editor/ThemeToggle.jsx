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
    <li
      className="tooltip tooltip-left sm:tooltip-bottom flex items-center hover:bg-"
      data-tip="Toggle theme"
    >
      <label className="swap swap-rotate">
        <input
          aria-label="Toggle Theme"
          type="checkbox"
          onChange={toggleTheme}
        />
        <Moon
          className={`${
            initialTheme === "dark" ? "swap-on" : "swap-off"
          } text-base-content  w-5.5 h-5.5"`}
        />
        <Sun
          className={`${
            initialTheme === "light" ? "swap-on" : "swap-off"
          } text-base-content  w-5.5 h-5.5 `}
        />
      </label>
    </li>
  );
};
