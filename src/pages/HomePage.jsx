import { NoteEditor } from "../components/features/editor/NoteEditor";

export const HomePage = () => {
  return (
    <div className="flex flex-col w-full min-h-full bg-base-300">
      <NoteEditor />
    </div>
  );
};
