const filterList = products => {
  return products.sort((a, b) => a.repayments.monthly - b.repayments.monthly);
};
export default filterList;


