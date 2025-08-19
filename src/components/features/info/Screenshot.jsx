export const Screenshot = ({ image, alt }) => {
  return (
    <img
      src={image}
      alt={alt}
      width="45%"
      height="45%"
      className="rounded shadow"
    />
  );
};
