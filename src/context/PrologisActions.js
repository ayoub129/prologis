export const SearchProperties = (text, data) => {
  const newData = data.filter(
    (ele) =>
      String(ele.city.trim().toUpperCase()) ===
      String(text.trim().toUpperCase())
  );

  return newData;
};
