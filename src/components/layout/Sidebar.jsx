import { useContext } from "react";
import { LayoutContext } from "../../context/LayoutContext";
import { SidebarToolbar } from "../features/sidebar/SidebarToolbar";
import { SearchBar } from "../features/sidebar/SearchBar";
import { NoteMenu } from "../features/sidebar/NoteMenu";
import { IconButton } from "../ui/IconButton";
import { PanelLeftOpen } from "lucide-react";

export const Sidebar = () => {
  const { isExpanded, toggleSidebar } = useContext(LayoutContext);

  return (
    <>
      <div
        className={`fixed bg-base-200 w-[20rem] h-screen flex flex-col transition-opacity duration-300 ease-in-out ${
          isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <SidebarToolbar />
        <div className="flex flex-col gap-3 p-3 flex-1 min-h-0">
          <SearchBar />
          <NoteMenu />
        </div>
      </div>
      <div
        className={`fixed p-2 flex flex-col transition-opacity duration-300 ease-in-out ${
          isExpanded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <IconButton onClick={toggleSidebar}>
          <PanelLeftOpen className="w-6 h-6" />
        </IconButton>
      </div>
    </>
  );
};
