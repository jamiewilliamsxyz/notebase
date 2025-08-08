import { FilePlus } from "lucide-react";
import { PanelLeftClose } from "lucide-react";
// import { PanelLeftOpen } from "lucide-react";
// https://daisyui.com/components/swap/

import { IconButton } from "../../ui/IconButton";

export const SidebarActions = () => {
  return (
    <div className="bg-base-100 flex justify-between p-3">
      <IconButton>
        <FilePlus className="w-8 h-8" />
      </IconButton>
      <IconButton>
        <PanelLeftClose className="w-8 h-8" />
      </IconButton>
    </div>
  );
};
