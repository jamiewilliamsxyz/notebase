import { setItem } from "../utils/storage";
import { WorkspaceContext } from "../../../context/WorkspaceContext";
import { Save } from "lucide-react";
import { useContext, useState } from "react";
import { LayoutContext } from "../../../context/LayoutContext";

export const SaveButton = ({ setIsAlertOpen }) => {
  const { notes } = useContext(WorkspaceContext);
  const { isExpanded } = useContext(LayoutContext);

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
    <button
      className={`tooltip tooltip-right cursor-pointer fixed bottom-1 left-2 w-fit h-fit p-2 transition-all duration-300 ease-in-out ${
        isExpanded ? "ml-[20rem]" : ""
      }`}
      data-tip="Save Note"
      disabled={isDisabled}
      onClick={handleSave}
    >
      <Save className="text-success w-6 h-6" />
    </button>
  );
};
