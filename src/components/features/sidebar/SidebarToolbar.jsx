import { FilePlus } from "lucide-react";
import { PanelLeftClose } from "lucide-react";
import { IconButton } from "../../ui/IconButton";

export const SidebarToolbar = ({ handleToggle }) => {
  return (
    <div className="bg-base-100 flex justify-between p-3">
      <IconButton>
        <FilePlus className="w-8 h-8" />
      </IconButton>
      <IconButton onClick={handleToggle}>
        <PanelLeftClose className="w-8 h-8" />
      </IconButton>
    </div>
  );
};
