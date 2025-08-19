import { setItem } from "../../../utils/storage";
import { WorkspaceContext } from "../../../context/WorkspaceContext";
import { Save } from "lucide-react";
import { useContext, useState } from "react";

export const SaveButton = ({ setIsAlertOpen }) => {
  const { notes } = useContext(WorkspaceContext);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSave = () => {
    setItem("notes", notes);
    setIsAlertOpen(true);
    setIsDisabled(true);
    setTimeout(() => {
      setIsAlertOpen(false);
      setIsDisabled(false);
    }, 4000);
  };

  return (
    <li
      className="tooltip tooltip-left sm:tooltip-bottom flex items-center"
      data-tip="Save note"
    >
      <button
        className="cursor-pointer transition-all duration-300 ease-in-out"
        aria-label="Save Note"
        disabled={isDisabled}
        onClick={handleSave}
      >
        <Save className="text-success w-5.5 h-5.5" />
      </button>
    </li>
  );
};
