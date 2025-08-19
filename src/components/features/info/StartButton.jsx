import { Link } from "react-router";

export const StartButton = () => {
  return (
    <Link
      to="/"
      className="btn btn-primary fixed bottom-5 left-1/2 -translate-x-1/2"
    >
      Take me to the editor
    </Link>
  );
};
