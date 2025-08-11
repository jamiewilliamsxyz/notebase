import { useContext, useState, useEffect } from "react";
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
          isSelected ? "bg-primary" : ""
        } mb-1.5 transition-colors duration-300 ease-in-out`}
      >
        {title}
      </a>
    </li>
  );
};
