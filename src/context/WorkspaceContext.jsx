import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const WorkspaceContext = createContext();

export const WorkspaceContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([
    { id: 1, title: "Untitled", content: "Untitled Content Test" },
    { id: 2, title: "Untitled 1", content: "Untitled 1 Content Test" },
    { id: 3, title: "Untitled 2", content: "Untitled 2 Content Test" },
  ]);

  const createNote = () => {
    setNotes((prev) => [
      ...prev,
      { id: uuidv4(), title: "Untitled", content: "" },
    ]);
  };

  return (
    <WorkspaceContext.Provider value={{ notes, createNote }}>
      {children}
    </WorkspaceContext.Provider>
  );
};
