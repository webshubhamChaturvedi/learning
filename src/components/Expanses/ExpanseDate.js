import React from "react";
import Card from "../UI/Card";
const Date = (props) => {
  const month = props.dates.toLocaleString("en-US", { month: "long" });
  const date = props.dates.toLocaleString("en-US", { day: "2-digit" });
  const year = props.dates.getFullYear();
  return (
    <Card>
      <div
        style={{ backgroundColor: `${props.bgcolor}` }}
        className="expense-date"
      >
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__day">{date}</div>
        <div className="expense-date__year">{year}</div>
      </div>
    </Card>
  );
};

export default Date;
