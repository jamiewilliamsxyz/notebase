import { Link } from "react-router";

export const StartButton = () => {
  return (
    <Link
      to="/"
      className="btn btn-primary max-w-44 fixed bottom-5 self-center"
    >
      Take me to the editor
    </Link>
  );
};
