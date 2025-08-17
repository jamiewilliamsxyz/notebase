import { useContext, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { WorkspaceContext } from "../../../context/WorkspaceContext";
import { ThemeContext } from "../../../context/ThemeContext";
import { LayoutContext } from "../../../context/LayoutContext";
import { ThemeToggle } from "./ThemeToggle";
import { EditorModeToggle } from "./EditorModeToggle";

export const MarkdownEditor = () => {
  const { noteOpen, notes } = useContext(WorkspaceContext);
  const { theme } = useContext(ThemeContext);
  const { isExpanded } = useContext(LayoutContext);

  const [markdownContent, setMarkdownContent] = useState("");
  const [editorMode, setEditorMode] = useState("edit");

  const handleToggleEditorMode = () => {
    setEditorMode((prev) => (prev === "edit" ? "view" : "edit"));
  };

  useEffect(() => {
    setMarkdownContent(noteOpen.content);
  }, [noteOpen]);

  useEffect(() => {
    if (notes.length != 0) return;
    setMarkdownContent("You have no notes!");
  }, [notes.length]);

  return (
    <div
      className={`min-h-screen
        ${
          theme === "dark" ? "bg-base-300 text-white" : "bg-white text-base-300"
        }
        ${
          isExpanded
            ? "opacity-25 sm:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none sm:pointer-events-auto"
            : ""
        }
      `}
    >
      <EditorModeToggle onToggleEditorMode={handleToggleEditorMode} />

      {editorMode === "edit" ? (
        <div className="h-screen py-12 px-4 md:py-15 md:px-20 lg:py-20 lg:px-25">
          <textarea
            name="editor"
            value={markdownContent}
            onChange={(e) => setMarkdownContent(e.target.value)}
            placeholder="Start typing here..."
            className="h-[100%] textarea bg-transparent text-base border-0 shadow-none resize-none overflow-hidden w-full  leading-relaxed focus:bg-transparent focus:shadow-none focus:outline-none p-0 field-sizing-content break-all"
          />
        </div>
      ) : editorMode === "view" ? (
        <div className="html-content leading-relaxed break-all whitespace-pre-wrap w-full py-12 px-4 md:py-15 md:px-20 lg:py-20 lg:px-25">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {markdownContent}
          </ReactMarkdown>
        </div>
      ) : (
        <p className="text-error text-3xl text-semibold text-center">
          Error: Invalid editor mode
        </p>
      )}

      <ThemeToggle />
    </div>
  );
};
