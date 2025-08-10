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
      {isExpanded ? (
        <div className="fixed p-3 flex flex-col">
          <IconButton onClick={toggleSidebar}>
            <PanelLeftOpen className="w-8 h-8" />
          </IconButton>
        </div>
      ) : (
        <div className="fixed bg-base-200 w-[20rem] h-screen flex flex-col">
          <SidebarToolbar />
          <div className="flex flex-col gap-5 p-5">
            <SearchBar />
            <NoteMenu />
          </div>
        </div>
      )}
    </>
  );
};
