import { CircleQuestionMark } from "lucide-react";
import { Link } from "react-router";
import { IconButton } from "../../ui/IconButton";

export const InfoLink = () => {
  return (
    <Link
      to="/info"
      aria-label="Info Page"
      className="bottom-2 left-2 tooltip tooltip-right w-fit h-fit"
      data-tip="Info page"
    >
      <IconButton>
        <CircleQuestionMark className="w-6 h-6 text-info" />
      </IconButton>
    </Link>
  );
};
