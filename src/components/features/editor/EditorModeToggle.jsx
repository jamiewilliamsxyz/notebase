import { useContext } from "react";
import { PencilLine, BookOpen } from "lucide-react";
import { ThemeContext } from "../../../context/ThemeContext";

export const EditorModeToggle = ({ onToggleEditorMode }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`tooltip tooltip-left fixed top-2 right-2.5 w-fit h-fit p-2 ${
        theme === "dark" ? "" : "text-base-300"
      }`}
      data-tip="Switch editor mode"
    >
      <label className="swap swap-rotate">
        <input
          aria-label="Toggle Editor Mode"
          type="checkbox"
          onChange={onToggleEditorMode}
        />
        <PencilLine className="swap-on w-6 h-6" />
        <BookOpen className="swap-off w-6 h-6" />
      </label>
    </div>
  );
};
