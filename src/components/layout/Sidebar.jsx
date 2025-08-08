import { SidebarActions } from "../features/sidebar/SidebarActions";
import { SearchBar } from "../features/sidebar/SearchBar";
import { NoteMenu } from "../features/sidebar/NoteMenu";

export const Sidebar = () => {
  return (
    <div className="bg-base-200 w-[18rem] min-w-[18rem] h-screen flex flex-col">
      <SidebarActions />
      <div>
        <SearchBar />
        <NoteMenu />
      </div>
    </div>
  );
};
