import { save } from "../../../utils/save";
import { WorkspaceContext } from "../../../context/WorkspaceContext";
import { Save } from "lucide-react";
import { useContext } from "react";

export const SaveButton = () => {
  const { notes } = useContext(WorkspaceContext);

  return (
    <button
      className="tooltip tooltip-right cursor-pointer fixed bottom-1 left-2 w-fit h-fit p-2"
      data-tip="Save Note"
      onClick={save("notes", notes)}
    >
      <Save className="text-success w-6 h-6" />
    </button>
  );
};
