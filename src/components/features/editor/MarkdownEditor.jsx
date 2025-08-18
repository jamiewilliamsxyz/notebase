import { useContext, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { WorkspaceContext } from "../../../context/WorkspaceContext";
import { ThemeContext } from "../../../context/ThemeContext";
import { LayoutContext } from "../../../context/LayoutContext";
import { ThemeToggle } from "./ThemeToggle";
import { SaveButton } from "./SaveButton";
import { EditorModeToggle } from "./EditorModeToggle";

export const MarkdownEditor = () => {
  const { noteOpen, notes, updateNoteContent } = useContext(WorkspaceContext);
  const { theme } = useContext(ThemeContext);
  const { isExpanded } = useContext(LayoutContext);

  const [markdownContent, setMarkdownContent] = useState("");
  const [editorMode, setEditorMode] = useState("edit");
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleToggleEditorMode = () => {
    setEditorMode((prev) => (prev === "edit" ? "view" : "edit"));
  };

  useEffect(() => {
    setMarkdownContent(noteOpen.content);
  }, [noteOpen]);

  useEffect(() => {
    if (notes.length != 0) {
      setIsDisabled(false);
    } else if (notes.length === 0) {
      setMarkdownContent("You have no notes!");
      setIsDisabled(true);
    }
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
      <EditorModeToggle
        onToggleEditorMode={handleToggleEditorMode}
        isDisabled={isDisabled}
      />

      {editorMode === "edit" ? (
        <div className="h-screen py-12 px-4 md:py-15 md:px-20 lg:py-20 lg:px-25">
          <textarea
            name="editor"
            value={markdownContent}
            disabled={isDisabled}
            onChange={(e) => {
              const newValue = e.target.value;
              setMarkdownContent(newValue);
              updateNoteContent(noteOpen.id, newValue);
            }}
            placeholder="Start typing here..."
            className="h-[100%] disabled:bg-transparent disabled:text-error disabled:text-center disabled:font-semibold disabled:text-lg disabled:underline textarea bg-transparent text-base border-0 shadow-none resize-none overflow-hidden w-full  leading-relaxed focus:bg-transparent focus:shadow-none focus:outline-none p-0 field-sizing-content break-all"
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

      <div
        className={`toast bottom-2 right-2 z-20 pointer-events-none transition-opacity duration-300 ease-in-out ${
          isAlertOpen ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="alert alert-success">
          <span>Note saved successfully</span>
        </div>
      </div>

      <SaveButton
        setIsAlertOpen={setIsAlertOpen}
        isDisabled={isDisabled}
        setIsDisabled={setIsDisabled}
      />
      <ThemeToggle />
    </div>
  );
};
