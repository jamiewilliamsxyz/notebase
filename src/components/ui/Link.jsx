export const Link = ({ url, text }) => {
  return (
    <a href={url} rel="noopener" target="_blank" className="link link-hover">
      {text}
    </a>
  );
};
