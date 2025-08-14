import { useContext } from "react";
import { LayoutContext } from "../../../context/LayoutContext";
import { WorkspaceContext } from "../../../context/WorkspaceContext";

import { FilePlus } from "lucide-react";
import { PanelLeftClose } from "lucide-react";
import { IconButton } from "../../ui/IconButton";

export const SidebarToolbar = () => {
  const { toggleSidebar } = useContext(LayoutContext);
  const { createNote } = useContext(WorkspaceContext);

  return (
    <div className="bg-base-100 flex justify-between p-2">
      <IconButton onClick={createNote}>
        <FilePlus className="w-6 h-6" />
      </IconButton>
      <IconButton onClick={toggleSidebar}>
        <PanelLeftClose className="w-6 h-6" />
      </IconButton>
    </div>
  );
};
