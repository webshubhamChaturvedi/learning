import React, { useState } from "react";
import ExpenseList from "./Expanselist";
import ExpanseFilter from "../NewExpanse/ExpanseFilter";
import ExpanseChart from "./ExpanseChart";
import Card from "../UI/Card";

export default function Expanses(props) {
  const [filterList, setfilterList] = useState("2019");

  const getFilterdata = (filterdata) => {
    // setfilterList(filterdata);
    return filterdata === "all"
      ? setfilterList("all")
      : setfilterList(filterdata);
  };
  return (
    <div>
      <Card className="expanseFilter">
        <ExpanseFilter
          onfilterData={getFilterdata}
          getfilterprop={props.arrlist}
        ></ExpanseFilter>
        {/* looping the above array */}
        <ExpanseChart updatearrlist={props.arrlist}></ExpanseChart>
      </Card>
      {/* {filterList === "all"
        ? props.arrlist.map((arr) => (
            <ExpanseChart updatearrlist={arr}></ExpanseChart>
          ))
        : props.arrlist
            .filter((arr) => arr.date.getFullYear().toString() === filterList)
            .map((arr) => <ExpanseChart updatearrlist={arr}></ExpanseChart>)} */}
      {/* {props.arrlist} */}

      {filterList === "all"
        ? props.arrlist.map((arr) => (
            <ExpenseList
              key={arr.id}
              expenseId={arr.id + 1}
              expenseTitle={arr.title}
              expenseDate={arr.date}
              expenseAmmount={arr.ammount}
              bgcolor={arr.bgcolor}
            ></ExpenseList>
          ))
        : props.arrlist
            .filter((arr) => arr.date.getFullYear().toString() === filterList)
            .map((arr) => (
              <ExpenseList
                key={arr.id}
                expenseId={arr.id + 1}
                expenseTitle={arr.title}
                expenseDate={arr.date}
                expenseAmmount={arr.ammount}
                bgcolor={arr.bgcolor}
              ></ExpenseList>
            ))}
      {/* <div>
        <ExpenseList
          expenseId={expeseArray[0].id + 1}
          expenseTitle={expeseArray[0].title}
          expenseDate={expeseArray[0].date}
          expenseAmmount={expeseArray[0].ammount}
          bgcolor={"red"}
        ></ExpenseList>
        <ExpenseList
          expenseId={expeseArray[1].id + 1}
          expenseTitle={expeseArray[1].title}
          expenseDate={expeseArray[1].date}
          expenseAmmount={expeseArray[1].ammount}
          bgcolor={"blue"}
        ></ExpenseList>
        <ExpenseList
          expenseId={expeseArray[2].id + 1}
          expenseTitle={expeseArray[2].title}
          expenseDate={expeseArray[2].date}
          expenseAmmount={expeseArray[2].ammount}
          bgcolor={"green"}
        ></ExpenseList>
        <ExpenseList
          expenseId={expeseArray[3].id + 1}
          expenseTitle={expeseArray[3].title}
          expenseDate={expeseArray[3].date}
          expenseAmmount={expeseArray[3].ammount}
          bgcolor={""}
        ></ExpenseList>
      </div> */}
    </div>
  );
}
