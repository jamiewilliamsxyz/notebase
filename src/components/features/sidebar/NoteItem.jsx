import { useContext, useState, useEffect } from "react";
import { PenLine, Trash } from "lucide-react";
import { WorkspaceContext } from "../../../context/WorkspaceContext";

export const NoteItem = ({ id, title }) => {
  const { openNote, noteOpen } = useContext(WorkspaceContext);

  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (noteOpen.id === id) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [noteOpen]);

  return (
    <li>
      <a
        onClick={() => openNote(id)}
        className={`${
          isSelected ? "bg-neutral" : ""
        } text-sm mb-1.5 px-2.5 py-1.5 transition-colors duration-300 ease-in-out dropdown dropdown-right flex flex-row justify-between`}
      >
        {title}
        <div className="flex gap-4">
          <PenLine className="w-4.5 h-4.5 text-base-content" />
          <Trash className="w-4.5 h-4.5 text-base-content hover:text-error transition-colors duration-300" />
        </div>
      </a>
    </li>
  );
};
