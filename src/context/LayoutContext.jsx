import { createContext, useState } from "react";

export const LayoutContext = createContext();

export const LayoutContextProvider = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 768;
    }
    return true;
  });

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <LayoutContext.Provider value={{ isExpanded, toggleSidebar }}>
      {children}
    </LayoutContext.Provider>
  );
};
