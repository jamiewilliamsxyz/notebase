import { NoteEditor } from "../components/features/notes/NoteEditor";

export const HomePage = () => {
  return (
    <div className="flex flex-col w-full min-h-full bg-base-300">
      {/* Toolbar */}
      <NoteEditor />
      {/* Bottom bar */}
    </div>
  );
};
