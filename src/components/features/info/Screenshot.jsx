export const Screenshot = ({ image, alt }) => {
  return (
    <img src={image} alt={alt} className="w-[60%] h-[auto] rounded shadow" />
  );
};
