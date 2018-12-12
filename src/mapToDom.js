import card from "./templates/card.template";
const mapToDom= (resultContainer,products) => {
  return products.map(lender => {
    const {
      bank_name,
      product_name,
      rate_type,
      interest_rate,
      comparison_rate,
      repayments
    } = lender;
    const newNode = document.createElement("div");
    resultContainer.appendChild(newNode);
    newNode.innerHTML = card({
      lender: bank_name,
      product: product_name,
      interestType: rate_type,
      interestRate: interest_rate,
      comparisonRate: comparison_rate,
      monthlyRepayment: repayments.monthly
    });
  });
};
export default mapToDom;


