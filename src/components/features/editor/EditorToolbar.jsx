import { EditorModeToggle } from "./EditorModeToggle";
import { ThemeToggle } from "./ThemeToggle";
import { SaveButton } from "./SaveButton";

export const EditorToolbar = ({ setIsAlertOpen, toggleEditorMode }) => {
  return (
    <ul className="fixed top-1.5 right-1 sm:top-2.5 sm:right-2 flex flex-row items-center gap-5.5 px-4 py-2 sm:gap-6.5 sm:px-6 sm:py-2.5 bg-base-100 rounded-xl shadow-lg">
      <EditorModeToggle toggleEditorMode={toggleEditorMode} />
      <ThemeToggle />
      <SaveButton setIsAlertOpen={setIsAlertOpen} />
    </ul>
  );
};
