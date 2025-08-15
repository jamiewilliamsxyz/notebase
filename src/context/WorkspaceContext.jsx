import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const WorkspaceContext = createContext();

export const WorkspaceContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([
    { id: "1", title: "Welcome To Notebase", content: "Short guide" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const [noteOpen, setNoteOpen] = useState({
    id: "1",
    title: "Welcome To Notebase",
    content: "Short guide",
  });

  const createNote = () => {
    const newNote = { id: uuidv4(), title: "Untitled", content: "" };

    setNotes((prev) => [...prev, newNote]);

    setNoteOpen(newNote);
  };

  const openNote = (id) => {
    const matchingNote = notes.filter((note) => note.id === id);
    setNoteOpen(...matchingNote);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <WorkspaceContext.Provider
      value={{
        notes,
        createNote,
        openNote,
        noteOpen,
        searchQuery,
        setSearchQuery,
        deleteNote,
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
};
