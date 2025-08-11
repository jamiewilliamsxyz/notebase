import { useContext, useState, useEffect } from "react";
import { WorkspaceContext } from "../../../context/WorkspaceContext";
import { Ellipsis, Trash, PenLine } from "lucide-react";

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
          isSelected ? "bg-primary" : ""
        } mb-1.5 transition-colors duration-300 ease-in-out dropdown dropdown-right flex flex-row justify-between`}
      >
        {title}
        <div tabIndex={0} role="button">
          <Ellipsis className="w-7 h-7" />
        </div>

        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow"
        >
          <li>
            <a className="flex flex-row gap-3">
              <PenLine className="w-6 h-6" /> Rename
            </a>
          </li>
          <li>
            <a className="flex flex-row gap-3">
              <Trash className="w-6 h-6" />
              Delete
            </a>
          </li>
        </ul>
      </a>
    </li>
  );
};
