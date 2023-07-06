import React from "react";

const ExpanseGraph = (props) => {
  let barFill = "0";
  if (props.maxvalue > 0) {
    barFill = Math.round((props.value / props.maxvalue) * 100);
  }
  return (
    <li key={props.id + 1}>
      <label>{props.value}</label>

      <div style={{ width: `${props.label > 9 ? 30 : 20}px` }}>
        <span
          style={{
            height: `${barFill}%`,
            transition: "height 0.5s ease-in-out",
          }}
        ></span>
      </div>
      <label>{props.label}</label>
    </li>
  );
};

export default ExpanseGraph;
