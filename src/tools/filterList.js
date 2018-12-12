//rateType can be Fixed or Variable

const filterList = (products, rateType) => {
  return rateType !== undefined
    ? products.filter(({ rate_type }) => rate_type === rateType)
    : products;
};
export default filterList;
