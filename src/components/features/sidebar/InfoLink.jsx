import { CircleQuestionMark } from "lucide-react";
import { Link } from "react-router";
import { IconButton } from "../../ui/IconButton";

export const InfoLink = () => {
  return (
    <Link to="/info" aria-label="Info Page" className="mb-2 ml-2">
      <IconButton>
        <CircleQuestionMark className="w-6 h-6 bottom-2 left-2" />
      </IconButton>
    </Link>
  );
};
