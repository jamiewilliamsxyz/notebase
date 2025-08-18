import { Screenshot } from "../info/Screenshot";

export const GuideListItem = ({ heading, image, alt }) => {
  return (
    <li>
      <h4>{heading}</h4>
      <Screenshot image={image} alt={alt} />
    </li>
  );
};
