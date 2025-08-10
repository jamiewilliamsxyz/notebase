import { createContext, useState } from "react";

export const LayoutContext = createContext();

export const LayoutContextProvider = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <LayoutContext.Provider value={{ isExpanded, toggleSidebar }}>
      {children}
    </LayoutContext.Provider>
  );
};
