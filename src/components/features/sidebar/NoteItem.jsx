import { useContext, useState, useEffect, useRef } from "react";
import { PenLine, Trash, Check, X } from "lucide-react";
import { WorkspaceContext } from "../../../context/WorkspaceContext";

export const NoteItem = ({ id, title }) => {
  const {
    openNote,
    noteOpen,
    setNoteToDeleteId,
    setIsModalOpen,
    setNotes,
    renamingNoteId,
    setRenamingNoteId,
  } = useContext(WorkspaceContext);

  const [isSelected, setIsSelected] = useState(false);
  const [displayTitle, setDisplayTitle] = useState("");

  const isRenaming = renamingNoteId === id;

  const titleInputRef = useRef(null);

  useEffect(() => {
    setDisplayTitle(title);
  }, []);

  useEffect(() => {
    if (isRenaming && titleInputRef.current) {
      titleInputRef.current.focus();
      titleInputRef.current.select();
    }
  }, [isRenaming]);

  useEffect(() => {
    if (renamingNoteId === null) {
      titleInputRef.current.blur();
    }
  });

  useEffect(() => {
    if (noteOpen.id === id) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [noteOpen]);

  const handleRenameConfirm = () => {
    setRenamingNoteId(null);
    const updatedTitle = displayTitle;

    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, title: updatedTitle } : note
      )
    );
  };

  const revertTitle = () => {
    setDisplayTitle(title);
    setRenamingNoteId(null);
  };

  return (
    <li>
      <a
        onClick={() => openNote(id)}
        href="#"
        className={`${
          isSelected ? "bg-neutral" : ""
        } text-sm mb-1.5 px-2.5 py-1.5 transition-colors duration-300 ease-in-out dropdown dropdown-right flex flex-row justify-between`}
      >
        <input
          type="text"
          maxLength="27"
          ref={titleInputRef}
          disabled={!isRenaming}
          value={displayTitle}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleRenameConfirm();
            } else if (e.key === "Escape") {
              revertTitle();
            }
          }}
          onChange={(e) => setDisplayTitle(e.target.value)}
          className="overflow-ellipsis cursor-pointer disabled:pointer-events-none focus:cursor-text focus:border-b-2 focus:border-dashed"
        />

        {!isRenaming ? (
          <div className="flex gap-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setRenamingNoteId(id);
              }}
              aria-label="Rename Note"
              className="text-base-content cursor-pointer hover:opacity-60 transition-opacity duration-300 "
            >
              <PenLine className="w-4.5 h-4.5" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setNoteToDeleteId(id);
                setIsModalOpen(true);
              }}
              aria-label="Delete Note"
              className="text-base-content hover:text-error transition-colors duration-300 cursor-pointer"
            >
              <Trash className="w-4.5 h-4.5" />
            </button>
          </div>
        ) : (
          <div className="flex gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleRenameConfirm();
              }}
              data-tip="Confirm"
              aria-label="Confirm Rename Note"
              className="tooltip tooltip-bottom text-success cursor-pointer"
            >
              <Check
                className="w-4.5 h-4.5 hover:opacity-65 transition-opacity duration-300"
                strokeWidth={3}
              />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                revertTitle();
              }}
              data-tip="Cancel"
              aria-label="Cancel Renaming Note"
              className="tooltip tooltip-bottom text-error cursor-pointer"
            >
              <X
                className="w-4.5 h-4.5 hover:opacity-65 transition-opacity duration-300"
                strokeWidth={3}
              />
            </button>
          </div>
        )}
      </a>
    </li>
  );
};
