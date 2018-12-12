const filterList = products => {
  return products.filter(({ rate_type }) => rate_type === "Variable");
};
export default filterList;
