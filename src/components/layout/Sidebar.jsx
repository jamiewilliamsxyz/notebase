import { SidebarActions } from "../features/sidebar/SidebarActions";
import { SearchBar } from "../features/sidebar/SearchBar";
import { NoteMenu } from "../features/sidebar/NoteMenu";

export const Sidebar = () => {
  return (
    <div className="bg-base-200 w-[20rem] min-w-[20rem] h-screen flex flex-col">
      <SidebarActions />
      <div className="flex flex-col gap-5 p-5">
        <SearchBar />
        <NoteMenu />
      </div>
    </div>
  );
};
