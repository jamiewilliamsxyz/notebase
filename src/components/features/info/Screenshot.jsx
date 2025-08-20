export const Screenshot = ({ image, alt }) => {
  return (
    <img
      src={image}
      alt={alt}
      className="rounded shadow w-[80%] h-auto md:w-[60%] min-w-80"
    />
  );
};
