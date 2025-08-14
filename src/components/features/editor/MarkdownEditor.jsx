import { useContext, useState, useEffect } from "react";
import { WorkspaceContext } from "../../../context/WorkspaceContext";
import { EditorThemeToggle } from "./EditorThemeToggle";

export const MarkdownEditor = () => {
  const [editorTheme, setEditorTheme] = useState("dark");

  const handleToggleEditorTheme = () => {
    setEditorTheme((prev) => (prev === "dark" ? "light" : "dark"));
    console.log(editorTheme);
  };

  const { noteOpen } = useContext(WorkspaceContext);

  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(noteOpen.content);
  }, [noteOpen]);

  return (
    <div
      className={`min-h-screen p-10 ${
        editorTheme === "dark"
          ? "bg-base-300 text-white"
          : "bg-white text-base-300"
      }`}
    >
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Start typing here..."
        className="textarea text-base bg-transparent border-0 shadow-none resize-none overflow-hidden w-full min-h-96 leading-relaxed focus:bg-transparent focus:shadow-none focus:outline-none "
      />

      <EditorThemeToggle onToggleEditorTheme={handleToggleEditorTheme} />
    </div>
  );
};
