import card from "../templates/card.template";
const mapToContainer= (resultContainer,products) => {
  return products.map(lender => {
    setTimeout(function(){
    },1000)
    const {
      bank_name,
      product_name,
      rate_type,
      interest_rate,
      comparison_rate,
      repayments
    } = lender;
    const newChild = document.createElement("li");
    resultContainer.appendChild(newChild);
    newChild.innerHTML = card({
      lender: bank_name,
      product: product_name,
      interestType: rate_type,
      interestRate: interest_rate,
      comparisonRate: comparison_rate,
      monthlyRepayment: repayments.monthly
    });
  });
};
export default mapToContainer;


