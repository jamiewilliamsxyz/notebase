import { useContext } from "react";
import { LayoutContext } from "../../context/LayoutContext";
import { ThemeContext } from "../../context/ThemeContext";
import { SidebarToolbar } from "../features/sidebar/SidebarToolbar";
import { SearchBar } from "../features/sidebar/SearchBar";
import { NoteMenu } from "../features/sidebar/NoteMenu";
import { PanelLeftOpen } from "lucide-react";
import { InfoLink } from "../features/sidebar/InfoLink";

export const Sidebar = () => {
  const { isExpanded, toggleSidebar } = useContext(LayoutContext);
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <div
        className={`z-10 fixed bg-base-200 w-[20rem] h-screen flex flex-col transition-opacity duration-300 ease-in-out ${
          isExpanded ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <SidebarToolbar />
        <div className="flex flex-col flex-1 min-h-0">
          <SearchBar />
          <NoteMenu />
        </div>
        <InfoLink />
      </div>

      <div
        className={`fixed p-2 flex flex-col transition-opacity duration-300 ease-in-out ${
          isExpanded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <button
          onClick={toggleSidebar}
          aria-label="Open Sidebar"
          className={`btn btn-sm btn-square btn-ghost  hover:shadow-none  ${
            theme === "dark"
              ? ""
              : "hover:bg-neutral-100 hover:border-neutral-200"
          }`}
        >
          <PanelLeftOpen
            className={`w-6 h-6 ${theme === "dark" ? "" : "text-base-300"}`}
          />
        </button>
      </div>
    </>
  );
};
