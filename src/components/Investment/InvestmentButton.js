import React from "react";

function InvestmentButton(props) {
  return (
    <button
      className={`investmentCommonBtn ${props.className}`}
      onClick={props.event}
      type={props.type}
    >
      {props.text}
    </button>
  );
}

export default InvestmentButton;
