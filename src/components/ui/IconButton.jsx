export const IconButton = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="btn btn-sm btn-square btn-ghost hover:shadow-none"
    >
      {children}
    </button>
  );
};
