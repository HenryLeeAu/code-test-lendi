import style from "./style.css";

import { API_URL } from "./constants";
import filterList from './filterList'
import sortList from './sortList'
import mapToDom from './mapToDom'
const resultContainer = document.getElementById("results");
/*const tt = [
  {
    bank_name: "ING Direct",
    product_name: "Orange Advantage Combo Fixed - 1 year fixed (P&I)",
    rate_type: "Fixed",
    interest_rate: 3.58,
    comparison_rate: 4.62,
    repayments: {
      monthly: 2015.44
    },
  }, {
    bank_name: "Westpac",
    product_name: "Flexi First Option 2 Year Introductory Rate (P&I) - Owner Occupied",
    rate_type: "Variable",
    interest_rate: 3.59,
    comparison_rate: 4.42,
    repayments: {
      monthly: 1861.74
    },
  }, {
    bank_name: "Newcastle Permanent",
    product_name: "Premium Plus Package Fixed (P & I) - Owner Occupied - 1 Year",
    rate_type: "Fixed",
    interest_rate: 3.59,
    comparison_rate: 4.67,
    repayments: {
      monthly: 2222.74
    }
  }, {
    bank_name: "Bank SA",
    product_name: "Basic Variable Loan *Special* (P&I) - Owner Occupied",
    rate_type: "Variable",
    interest_rate: 3.64,
    comparison_rate: 3.65,
    repayments: {
      monthly: 4444.27
    }
  }, {
    bank_name: "Bank of Melbourne",
    product_name: "Basic Variable Loan *Special* (P&I)",
    rate_type: "Variable",
    interest_rate: 3.64,
    comparison_rate: 3.65,
    repayments: {
      monthly: 1873.27
    }
  }
];*/

resultContainer.innerHTML='loading result';
fetch(API_URL)
  .then(response => {
    resultContainer.innerHTML='';
    return response.json()
  })
  .then(json => json.data)
  .then(({ products }) => {
    mapToDom(resultContainer,sortList(filterList(products)))
     
  });
