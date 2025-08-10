import { createContext, useState } from "react";

export const WorkspaceContext = createContext();

export const WorkspaceContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([
    { id: 1, title: "Untitled", content: "Untitled Content Test" },
    { id: 2, title: "Untitled 1", content: "Untitled 1 Content Test" },
    { id: 3, title: "Untitled 2", content: "Untitled 2 Content Test" },
  ]);

  return (
    <WorkspaceContext.Provider value={{ notes }}>
      {children}
    </WorkspaceContext.Provider>
  );
};
