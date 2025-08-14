import { useState } from "react";
import { Moon, Sun } from "lucide-react";

export const EditorThemeToggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="fixed bottom-2 right-2 w-fit h-fit p-2">
      <label className="swap swap-rotate">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
        <Moon className="swap-off text-base-content w-6 h-6" />
        <Sun className="swap-on text-base-content w-6 h-6" />
      </label>
    </div>
  );
};
