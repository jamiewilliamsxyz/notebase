export const get = (key) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};
