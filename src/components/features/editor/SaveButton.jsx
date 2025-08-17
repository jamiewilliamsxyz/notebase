import { save } from "../../../utils/save";
import { WorkspaceContext } from "../../../context/WorkspaceContext";
import { Save } from "lucide-react";
import { useContext } from "react";
import { LayoutContext } from "../../../context/LayoutContext";

export const SaveButton = () => {
  const { notes } = useContext(WorkspaceContext);
  const { isExpanded } = useContext(LayoutContext);

  return (
    <button
      className={`tooltip tooltip-right cursor-pointer fixed bottom-1 left-2 w-fit h-fit p-2 transition-all duration-300 ease-in-out ${
        isExpanded ? "ml-[20rem]" : ""
      }`}
      data-tip="Save Note"
      onClick={save("notes", notes)}
    >
      <Save className="text-success w-6 h-6" />
    </button>
  );
};
