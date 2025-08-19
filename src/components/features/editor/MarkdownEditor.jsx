import { useContext, useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { WorkspaceContext } from "../../../context/WorkspaceContext";
import { ThemeContext } from "../../../context/ThemeContext";
import { LayoutContext } from "../../../context/LayoutContext";
import { EditorToolbar } from "./EditorToolbar";

export const MarkdownEditor = () => {
  const {
    noteOpen,
    notes,
    updateNoteContent,
    deleteNote,
    displayEditor,
    setDisplayEditor,
  } = useContext(WorkspaceContext);
  const { theme } = useContext(ThemeContext);
  const { isExpanded } = useContext(LayoutContext);

  const [markdownContent, setMarkdownContent] = useState("");
  const [editorMode, setEditorMode] = useState("edit");
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  useEffect(() => {
    if (Object.keys(noteOpen).length != 0) {
      setDisplayEditor(true);
    } else if (Object.keys(noteOpen).length === 0) {
      setDisplayEditor(false);
    }

    setMarkdownContent(noteOpen.content);
  }, [noteOpen, deleteNote]);

  useEffect(() => {
    if (notes.length != 0) {
      setDisplayEditor(true);
    } else if (notes.length === 0) {
      setDisplayEditor(false);
    }
  }, [notes.length]);

  const toggleEditorMode = () => {
    setEditorMode((prev) => (prev === "edit" ? "view" : "edit"));
  };

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
      {displayEditor ? (
        <>
          <EditorToolbar
            toggleEditorMode={toggleEditorMode}
            setIsAlertOpen={setIsAlertOpen}
          />

          {editorMode === "edit" ? (
            <div className="h-full py-14 px-5 md:py-15 md:px-15 lg:py-20 lg:px-25">
              <textarea
                name="editor"
                value={markdownContent}
                onChange={(e) => {
                  const newValue = e.target.value;
                  setMarkdownContent(newValue);
                  updateNoteContent(noteOpen.id, newValue);
                }}
                placeholder="Start typing here..."
                className="textarea field-sizing-content text-base resize-none leading-relaxed break-all w-full bg-transparent border-0 shadow-none overflow-hidden focus:bg-transparent focus:shadow-none focus:outline-none p-0"
              />
            </div>
          ) : editorMode === "view" ? (
            <div className="html-content leading-relaxed break-all whitespace-pre-wrap w-full py-14 px-5 md:py-15 md:px-15 lg:py-20 lg:px-25">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdownContent}
              </ReactMarkdown>
            </div>
          ) : (
            <div className="h-screen"></div>
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
        </>
      ) : (
        <div className="h-screen"></div>
      )}
    </div>
  );
};
