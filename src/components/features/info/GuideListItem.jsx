import { Screenshot } from "../info/Screenshot";

export const GuideListItem = ({ heading, image, alt }) => {
  return (
    <li className="flex flex-col items-center gap-2">
      <h5>{heading}:</h5>
      <Screenshot image={image} alt={alt} />
    </li>
  );
};
