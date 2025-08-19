import { EditorModeToggle } from "./EditorModeToggle";
import { ThemeToggle } from "./ThemeToggle";
import { SaveButton } from "./SaveButton";

export const EditorToolbar = () => {
  return (
    <ul className="fixed top-2.5 right-2 flex flex-col sm:flex-row items-center gap-5 px-3 py-6 sm:gap-6.5 sm:px-6 sm:py-2.5 bg-base-100 rounded-xl shadow-lg">
      <EditorModeToggle />
      <ThemeToggle />
      <SaveButton />
    </ul>
  );
};
