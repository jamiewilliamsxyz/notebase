import { useContext } from "react";
import { WorkspaceContext } from "../../../context/WorkspaceContext";
import { NoteItem } from "./NoteItem";

export const NoteMenu = () => {
  const { notes, searchQuery } = useContext(WorkspaceContext);

  const filteredNotes = notes
    .filter((note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .toSorted((a, b) => a.title.localeCompare(b.title));

  return (
    <ul className="menu menu-lg bg-base-200 rounded-box w-full flex-1 min-h-0 overflow-y-auto p-0 flex-nowrap rounded-none">
      {filteredNotes.length > 0 ? (
        filteredNotes.map((note) => {
          return <NoteItem key={note.id} id={note.id} title={note.title} />;
        })
      ) : (
        <li className="opacity-50 self-center mt-1">
          {searchQuery ? "No matches found" : null}
        </li>
      )}
    </ul>
  );
};
