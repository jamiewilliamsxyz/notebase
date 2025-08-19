import { PencilLine, BookOpen } from "lucide-react";

export const EditorModeToggle = ({ onToggleEditorMode }) => {
  return (
    <li
      className="tooltip tooltip-left sm:tooltip-bottom flex items-center"
      data-tip="Switch editor mode"
    >
      <label className="swap swap-rotate">
        <input
          aria-label="Toggle Editor Mode"
          type="checkbox"
          onChange={onToggleEditorMode}
        />
        <PencilLine className="swap-on w-5.5 h-5.5 text-base-content" />
        <BookOpen className="swap-off w-5.5 h-5.5 text-base-content" />
      </label>
    </li>
  );
};
