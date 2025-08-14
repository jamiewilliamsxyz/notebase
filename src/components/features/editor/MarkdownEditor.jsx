import { useContext, useState, useEffect } from "react";
import { WorkspaceContext } from "../../../context/WorkspaceContext";
import { ThemeContext } from "../../../context/ThemeContext";
import { ThemeToggle } from "./ThemeToggle";
import { EditorModeToggle } from "./EditorModeToggle";

export const MarkdownEditor = () => {
  const { noteOpen } = useContext(WorkspaceContext);
  const { theme } = useContext(ThemeContext);

  const [markdownContent, setMarkdownContent] = useState("");

  const [editorMode, setEditorMode] = useState("edit");

  const handleToggleEditorMode = () => {
    setEditorMode((prev) => (prev === "edit" ? "view" : "edit"));
  };

  useEffect(() => {
    setMarkdownContent(noteOpen.content);
  }, [noteOpen]);

  return (
    <div
      className={`min-h-screen p-10 ${
        theme === "dark" ? "bg-base-300 text-white" : "bg-white text-base-300"
      }`}
    >
      <EditorModeToggle onToggleEditorMode={handleToggleEditorMode} />

      {editorMode === "edit" ? (
        <textarea
          value={markdownContent}
          onChange={(e) => setMarkdownContent(e.target.value)}
          placeholder="Start typing here..."
          className="textarea text-base bg-transparent border-0 shadow-none resize-none overflow-hidden w-full min-h-96 leading-relaxed focus:bg-transparent focus:shadow-none focus:outline-none "
        />
      ) : editorMode === "view" ? (
        <div>HTML Content</div>
      ) : (
        <div className="flex items-center justify-center">
          <p className="text-error text-3xl text-semibold">
            Error: Invalid editor mode
          </p>
        </div>
      )}

      <ThemeToggle />
    </div>
  );
};
