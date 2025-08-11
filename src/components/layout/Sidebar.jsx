import { useContext } from "react";
import { LayoutContext } from "../../context/LayoutContext";
import { SidebarToolbar } from "../features/sidebar/SidebarToolbar";
import { SearchBar } from "../features/sidebar/SearchBar";
import { NoteMenu } from "../features/sidebar/NoteMenu";
import { IconButton } from "../ui/IconButton";
import { PanelLeftOpen } from "lucide-react";

// https://daisyui.com/components/collapse/

export const Sidebar = () => {
  const { isExpanded, toggleSidebar } = useContext(LayoutContext);

  return (
    <>
      {isExpanded ? (
        <div className="fixed bg-base-200 w-[26rem] h-screen flex flex-col">
          <SidebarToolbar />
          <div className="flex flex-col gap-5 p-5 flex-1 min-h-0">
            <SearchBar />
            <NoteMenu />
          </div>
        </div>
      ) : (
        <div className="fixed p-3 flex flex-col">
          <IconButton onClick={toggleSidebar}>
            <PanelLeftOpen className="w-8 h-8" />
          </IconButton>
        </div>
      )}
    </>
  );
};
