export const Link = ({ url, text }) => {
  return (
    <a
      href={url}
      rel="noopener"
      target="_blank"
      className="w-fit h-fit link link-primary"
    >
      {text}
    </a>
  );
};
