import { useContext, useState, useEffect } from "react";
import { WorkspaceContext } from "../../../context/WorkspaceContext";

export const DeleteNoteModal = () => {
  const { isModalOpen, setIsModalOpen, deleteNote, noteToDeleteId, notes } =
    useContext(WorkspaceContext);

  const [title, setTitle] = useState(null);

  useEffect(() => {
    if (!isModalOpen) return;
    const noteToDelete = notes.find((note) => note.id === noteToDeleteId);
    const title = noteToDelete.title;
    if (title.trim() === "") {
      setTitle("this note");
    } else {
      setTitle(title);
    }
  }, [isModalOpen, noteToDeleteId, notes]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-opacity duration-300 ${
        isModalOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        onClick={() => setIsModalOpen(false)}
        className="absolute inset-0 bg-base-300/50"
      ></div>
      <div className="z-50 w-fit max-w-96 wrap-break-word flex flex-col text-center gap-5 rounded shadow bg-base-100 p-5">
        <h3 className="font-semibold text-lg">
          Are you sure you want to delete "{title}"?
        </h3>
        <div className="flex justify-center gap-5">
          <button
            onClick={() => setIsModalOpen(false)}
            className="btn btn-soft"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              deleteNote(noteToDeleteId);
              setIsModalOpen(false);
            }}
            className="btn btn-soft btn-error"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
