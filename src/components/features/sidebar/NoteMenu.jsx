import { useContext } from "react";
import { WorkspaceContext } from "../../../context/WorkspaceContext";
import { NoteItem } from "./NoteItem";

export const NoteMenu = () => {
  const { notes } = useContext(WorkspaceContext);

  return (
    <ul className="menu menu-lg bg-base-200 rounded-box w-full flex-1 min-h-0 overflow-y-auto p-0 flex-nowrap rounded-none">
      {notes
        .toSorted((a, b) => a.title.localeCompare(b.title))
        .map((note) => {
          return <NoteItem key={note.id} id={note.id} title={note.title} />;
        })}
    </ul>
  );
};
