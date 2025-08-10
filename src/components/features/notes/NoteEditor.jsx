import { useContext, useState, useEffect } from "react";
import { WorkspaceContext } from "../../../context/WorkspaceContext";

export const NoteEditor = () => {
  // https://daisyui.com/components/loading/

  const { noteOpen } = useContext(WorkspaceContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    setTitle(noteOpen.title);
    setContent(noteOpen.content);
    console.log(noteOpen);
  }, [noteOpen]);

  return (
    <div className="min-h-screen flex flex-col p-10">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="input input-ghost input-xl w-full h-32 p-10 text-5xl font-semibold focus:bg-transparent focus:outline-none"
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onInput={(e) => {
          e.target.style.height = "auto";
          e.target.style.height = e.target.scrollHeight + "px";
        }}
        placeholder="Start typing here..."
        className="textarea textarea-xl textarea-ghost resize-none overflow-hidden w-full leading-relaxed p-10 pt-5 focus:bg-transparent focus:outline-none min-h-[calc(100vh - 268px)]"
      />
    </div>
  );
};
