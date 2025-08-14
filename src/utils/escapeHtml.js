export const escapeHtml = (string) => {
  return string.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};
