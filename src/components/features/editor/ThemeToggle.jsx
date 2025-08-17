import { useContext } from "react";
import { Moon, Sun } from "lucide-react";
import { ThemeContext } from "../../../context/ThemeContext";

export const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="fixed bottom-2 right-2.5 w-fit h-fit p-2">
      <label htmlFor="toggle-theme" className="swap swap-rotate">
        <input id="toggle-theme" type="checkbox" onChange={toggleTheme} />
        <Moon className="swap-off text-base-300 w-6 h-6" />
        <Sun className="swap-on text-white w-6 h-6" />
      </label>
    </div>
  );
};
