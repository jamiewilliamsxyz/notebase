import { createContext, useState } from "react";

export const WorkspaceContext = createContext();

export const WorkspaceContextProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  return (
    <WorkspaceContext.Provider value={notes}>
      {children}
    </WorkspaceContext.Provider>
  );
};
