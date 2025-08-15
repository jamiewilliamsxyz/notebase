export const escapeHtml = (str) => {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};
