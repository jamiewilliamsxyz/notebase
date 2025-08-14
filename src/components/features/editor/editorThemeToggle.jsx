import { useState } from "react";
import { Moon, Sun } from "lucide-react";

export const editorThemeToggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <label className="swap swap-rotate">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => {
          setIsChecked(!isChecked);
        }}
      />
      <Moon />
      <Sun />
    </label>
  );
};
