import { PencilLine, BookOpen } from "lucide-react";
export const EditorModeToggle = () => {
  return (
    <div className="fixed top-2 right-2 w-fit h-fit p-2">
      <label className="swap swap-rotate">
        <input type="checkbox" />
        <PencilLine className="swap-on text-base-300 w-6 h-6" />
        <BookOpen className="swap-off text-white w-6 h-6" />
      </label>
    </div>
  );
};
