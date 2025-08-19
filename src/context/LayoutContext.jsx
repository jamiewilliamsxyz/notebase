import { createContext, useState } from "react";

export const LayoutContext = createContext();

export const LayoutContextProvider = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth >= 768;
    }
    return true;
  });

  const [isHidden, setIsHidden] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <LayoutContext.Provider
      value={{
        isExpanded,
        toggleSidebar,
        setIsExpanded,
        isHidden,
        setIsHidden,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
};
