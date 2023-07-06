import React, { useState } from "react";
import InvestmentButton from "./InvestmentButton";
function InvestmentForm(props) {
  const [formvalue, setFormvalue] = useState({
    currentSaving: "",
    yearlySaving: "",
    intrest: "",
    investmentduration: "",
  });

  const handleInputChange = (e) => {
    const id = e.target.id;
    if (id === "current-savings") {
      setFormvalue({
        ...formvalue,
        currentSaving: e.target.value,
      });
    }
    if (id === "yearly-contribution") {
      setFormvalue({
        ...formvalue,
        yearlySaving: e.target.value,
      });
    }
    if (id === "expected-return") {
      setFormvalue({
        ...formvalue,
        intrest: e.target.value,
      });
    }
    if (id === "duration") {
      setFormvalue({
        ...formvalue,
        investmentduration: e.target.value,
      });
    }
  };
  const onSubmitform = (e) => {
    e.preventDefault();
    const checkCond =
      formvalue.currentSaving.length !== 0 &&
      formvalue.yearlySaving.length !== 0 &&
      formvalue.intrest !== 0 &&
      formvalue.investmentduration !== 0;
    // const getyear = checkCond && formvalue.investmentduration;
    // for (let i = 1; i <= getyear; i++) {

    // }

    props.onSubmitform(checkCond && formvalue);
    setFormvalue({
      currentSaving: "",
      yearlySaving: "",
      intrest: "",
      investmentduration: "",
    });
  };
  // console.log(formvalue);
  const resetResult = (e) => {
    setFormvalue({
      currentSaving: "",
      yearlySaving: "",
      intrest: "",
      investmentduration: "",
    });
    props.onReset(formvalue);
  };
  return (
    <form className="form" onSubmit={onSubmitform}>
      <div className="input-group">
        <div>
          <label>Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={formvalue.currentSaving}
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <label>Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={formvalue.yearlySaving}
            onChange={handleInputChange}
          ></input>
        </div>
      </div>
      <div className="input-group">
        <div>
          <label>Expected Interest (%, per year)</label>
          <input
            type="number"
            id="expected-return"
            value={formvalue.intrest}
            onChange={handleInputChange}
          ></input>
        </div>
        <div>
          <label>Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={formvalue.investmentduration}
            onChange={handleInputChange}
          ></input>
        </div>
      </div>
      <div className="buttonBlock">
        <InvestmentButton
          text="Reset"
          className="nobgbtn"
          event={resetResult}
          type="text "
        ></InvestmentButton>
        <InvestmentButton text="Calculate" type="submit"></InvestmentButton>
      </div>
    </form>
  );
}

export default InvestmentForm;
