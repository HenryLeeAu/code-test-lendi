//for home loan product, user usually only looks for lower price within simular criteria
// no need to order by higher price

const filterList = products => {
  return products.sort((a, b) => a.repayments.monthly - b.repayments.monthly);
};
export default filterList;


