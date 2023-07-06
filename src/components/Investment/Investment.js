import React, { useState } from "react";
import InvestmentForm from "./InvestmentForm";
import InvestmentTable from "./InvestmenTable";
import "../Investment/investment.css";
import investmentlogo from "../../assets/investment.png";
function Investment() {
  const [InputVal, setInputVal] = useState([]);
  const UpdateTable = (value) => {
    const inputarray = setInputVal((prev) => {
      return [...prev, value];
    });
    // for (let i = 1; i < Number(inputarray); i++) {
    // }
    // console.log(
    //   InputVal.investmentduration,
    //   typeof InputVal.investmentduration
    // );

    return inputarray;
  };

  const resetData = () => {
    return setInputVal([]);
  };

  return (
    <div className="investmentBlock">
      <div className="InvestmentHeader">
        <h1>Investment Calculator</h1>
        <img src={investmentlogo} alt={investmentlogo}></img>
      </div>
      <InvestmentForm
        onSubmitform={UpdateTable}
        onReset={resetData}
      ></InvestmentForm>
      <InvestmentTable
        setValue={InputVal.filter((item) => item !== false)}
      ></InvestmentTable>
    </div>
  );
}

export default Investment;
