import React, { useState } from "react";
import "./expense.css";
import Date from "./ExpanseDate";
import Card from "../UI/Card";

const ExpenseList = (props) => {
  const [title, SetTitle] = useState(props.expenseTitle);

  const clickHandler = () => {
    SetTitle("updated");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      {/* using card as a component composition */}
      <div className="idSection">
        {/* {props.expenseId}. */}
        <Date dates={props.expenseDate} bgcolor={props.bgcolor}></Date>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {props.expenseAmmount}</div>
        <button onClick={clickHandler}>{props.expenseTitle} </button>
        {/* <div
          className={`${props.expenseAmmount * 0.1} expense-item__price-Bar`}
        >
          $ {props.expenseAmmount}
        </div> */}
      </div>
    </Card>
  );
};

export default ExpenseList;
