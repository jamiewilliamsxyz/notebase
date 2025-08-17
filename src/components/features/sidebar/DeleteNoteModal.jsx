import { useContext } from "react";
import { WorkspaceContext } from "../../../context/WorkspaceContext";

export const DeleteNoteModal = () => {
  const { isModalOpen, setIsModalOpen, deleteNote, noteToDeleteId } =
    useContext(WorkspaceContext);

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
      <div className="z-100 flex flex-col text-center gap-5 rounded shadow bg-base-100 p-5">
        <h3 className="font-semibold text-lg">
          Are you sure you want to delete this note?
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
