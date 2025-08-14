import { useContext, useState, useEffect, useRef } from "react";
import { WorkspaceContext } from "../../../context/WorkspaceContext";

export const NoteEditor = () => {
  // https://daisyui.com/components/loading/

  const { noteOpen, notes } = useContext(WorkspaceContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const titleInputRef = useRef(null);
  const contentTextareaRef = useRef(null);

  useEffect(() => {
    setTitle(noteOpen.title);
    setContent(noteOpen.content);

    // Slice creates a new array with an object in, [0] gets the object inside of it at index 0
    const lastNote = notes.slice(-1)[0];

    // If note opened is last in notes array then focus/select title
    if (noteOpen === lastNote && lastNote.title === "Untitled") {
      titleInputRef.current.focus();
      titleInputRef.current.select();
    }
  }, [noteOpen]);

  return (
    <div className="min-h-screen flex flex-col p-10">
      <input
        type="text"
        value={title}
        ref={titleInputRef}
        // Pressing enter while on the title input will put the user onto the notes main content (textarea)
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            // e.preventDefault() needed to not add a new line when focused on the textarea
            e.preventDefault();
            contentTextareaRef.current.focus();
          }
        }}
        onChange={(e) => setTitle(e.target.value)}
        className="input input-ghost input-lg w-full h-24 text-4xl font-semibold focus:bg-transparent focus:outline-none"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onInput={(e) => {
          e.target.style.height = "auto";
          e.target.style.height = e.target.scrollHeight + "px";
        }}
        ref={contentTextareaRef}
        placeholder="Start typing here..."
        className="textarea text-base textarea-ghost resize-none overflow-hidden w-full leading-relaxed focus:bg-transparent focus:outline-none "
      />
    </div>
  );
};
