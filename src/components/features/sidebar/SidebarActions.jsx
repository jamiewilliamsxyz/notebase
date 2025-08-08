import { FilePlus } from "lucide-react";
import { PanelLeftClose } from "lucide-react";
// import { PanelLeftOpen } from "lucide-react";

import { IconButton } from "../../ui/IconButton";

export const SidebarActions = () => {
  return (
    <div className="bg-base-100 flex justify-between p-5">
      <IconButton>
        <FilePlus className="w-10 h-10" />
      </IconButton>
      <IconButton>
        <PanelLeftClose className="w-10 h-10" />
      </IconButton>
    </div>
  );
};
