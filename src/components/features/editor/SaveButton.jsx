import { save } from "../../../utils/save";
import { Save } from "lucide-react";

export const SaveButton = () => {
  return (
    <button
      className="tooltip tooltip-left fixed bottom-1 left-2 w-fit h-fit p-2"
      data-tip="Save Note"
    >
      <Save className="text-success w-6 h-6" />
    </button>
  );
};
