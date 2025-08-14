import { Moon, Sun } from "lucide-react";

export const EditorThemeToggle = ({ onToggleEditorTheme }) => {
  return (
    <div className="fixed bottom-2 right-2 w-fit h-fit p-2">
      <label className="swap swap-rotate">
        <input type="checkbox" onChange={onToggleEditorTheme} />
        <Moon className="swap-on text-base-content w-6 h-6" />
        <Sun className="swap-off text-base-content w-6 h-6" />
      </label>
    </div>
  );
};
