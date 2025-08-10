export const IconButton = ({ children, ...props }) => {
  return (
    <button {...props} className="btn btn-lg btn-square btn-ghost">
      {children}
    </button>
  );
};
