import { useContext } from "react";
import { WorkspaceContext } from "../../../context/WorkspaceContext";

export const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useContext(WorkspaceContext);

  return (
    <label className="input input-md focus-within:outline-none w-full">
      <svg
        className="h-[1em] opacity-50"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <g
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeWidth="2.5"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </g>
      </svg>
      <input
        type="search"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        aria-label="Search Note"
        placeholder="Search"
        className="focus:outline-0 focus:border-0"
      />
    </label>
  );
};
