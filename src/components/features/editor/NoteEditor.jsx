import { useContext, useState, useEffect } from "react";
import { WorkspaceContext } from "../../../context/WorkspaceContext";
import { EditorThemeToggle } from "./EditorThemeToggle";

export const NoteEditor = () => {
  // https://daisyui.com/components/loading/

  const { noteOpen } = useContext(WorkspaceContext);

  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(noteOpen.content);
  }, [noteOpen]);

  return (
    <div className="min-h-screen p-10">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Start typing here..."
        className="textarea text-base textarea-ghost resize-none overflow-hidden w-full min-h-96 leading-relaxed focus:bg-transparent focus:outline-none "
      />

      <EditorThemeToggle />
    </div>
  );
};
