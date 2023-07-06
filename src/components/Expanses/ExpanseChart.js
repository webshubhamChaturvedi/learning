import React from "react";
import ExpanseGraph from "./ExpanseGraph";
const ExpanseChart = (props) => {
  const month = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "March", value: 0 },
    { label: "April", value: 0 },
    { label: "May", value: 0 },
    { label: "June", value: 0 },
    { label: "July", value: 0 },
    { label: "August", value: 0 },
    { label: "Sept", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  for (const expenseval of props.updatearrlist) {
    const expenseMonth = expenseval.date.getMonth();
    month[expenseMonth].value += Number(expenseval.ammount);
    const expanensYer = expenseval.date.getFullYear();
    // console.log("expay", expanensYer);
  }
  const datapoints = month.map((arr) => arr.value);
  const totalMax = Math.max(...datapoints);
  //   console.log(month);
  //   console.log("yaer", props.filterchart);
  return (
    <ul className="FilterData">
      {month.map((arr, index) => (
        <ExpanseGraph
          key={index}
          label={arr.label}
          id={index}
          value={arr.value}
          maxvalue={totalMax}
          datapoints={arr}
        ></ExpanseGraph>
      ))}
    </ul>
  );
};

export default ExpanseChart;
