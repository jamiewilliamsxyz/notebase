import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { get } from "../utils/get";
import { save } from "../utils/save";

export const WorkspaceContext = createContext();

export const WorkspaceContextProvider = ({ children }) => {
  const [notes, setNotes] = useState(() => {
    return (
      get("notes") || [
        { id: "1", title: "Welcome To Notebase", content: "Short guide" },
      ]
    );
  });

  const [searchQuery, setSearchQuery] = useState("");

  const [renamingNoteId, setRenamingNoteId] = useState(null);

  const [noteToDeleteId, setNoteToDeleteId] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [noteOpen, setNoteOpen] = useState({
    id: "1",
    title: "Welcome To Notebase",
    content: "Short guide",
  });

  const updateNoteContent = (id, newContent) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, content: newContent } : note
      )
    );

    setNoteOpen((prev) =>
      prev.id === id ? { ...prev, content: newContent } : prev
    );
    console.log(notes);
  };

  const createNote = () => {
    const newNote = { id: uuidv4(), title: "Untitled", content: "" };

    setNotes((prev) => {
      const updatedNotes = [...prev, newNote];
      save("notes", updatedNotes);
      return updatedNotes;
    });

    setNoteOpen(newNote);
  };

  const openNote = (id) => {
    if (renamingNoteId === null) {
      const matchingNote = notes.filter((note) => note.id === id);
      setNoteOpen(...matchingNote);
    }
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    save("notes", updatedNotes);
  };

  return (
    <WorkspaceContext.Provider
      value={{
        notes,
        setNotes,
        createNote,
        openNote,
        noteOpen,
        searchQuery,
        setSearchQuery,
        noteToDeleteId,
        setNoteToDeleteId,
        isModalOpen,
        setIsModalOpen,
        deleteNote,
        renamingNoteId,
        setRenamingNoteId,
        updateNoteContent,
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  );
};
