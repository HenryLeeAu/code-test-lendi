const card = ({
  lender,
  product,
  interestRate,
  comparisonRate,
  monthlyRepayment,
}) => `
  <div class="card">
    <header class="card-header">
      <h2>${lender}</h2>
      <div>
        <span class="card-repayment">$${monthlyRepayment}</span> 
        /month
      </div>
    </header>
    <div class="card-wrapper">
      <div class="card-container">
        <div class="card-interest-type">${product}</div>
      </div>
      <div class="card-container">
        <div class="card-interest-rate">
          ${interestRate}% interest rate
        </div>
        <div class="card-comparison-rate">
          ${comparisonRate}% comparison rate
        </div>
      </div>
    </div>
  </div>
`;

export default card;