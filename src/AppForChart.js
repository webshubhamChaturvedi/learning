// import logo from './logo.svg';
import React, { useState } from "react";
// import ScrollableDiv from "./components/Slider";
import "./App.css";

import Button from "./components/UI/Button";
import Expanses from "./components/Expanses/Expenses";
import NewExpanse from "./components/NewExpanse/NewExpanse";
// import NewButton from "./components/newbuttonComp";
// import CheckInputlength from "./components/NewExpanse/TaskForState";
// import Counter from "./components/NewExpanse/Counter";
// import TabFunction from "./components/NewExpanse/tabView";
let expeseArray = [
  {
    id: 0,
    title: "Shirts",
    date: new Date(2023, 5, 5),
    ammount: 100,
    bgcolor: "lightblue",
  },
  {
    id: 0,
    title: "Shirts",
    date: new Date(2022, 5, 5),
    ammount: 100,
    bgcolor: "red",
  },
  {
    id: 1,
    title: "T-shirts",
    date: new Date(2021, 3, 22),
    ammount: 150,
    bgcolor: "blue",
  },
  {
    id: 2,
    title: "Trousers",
    date: new Date(2020, 6, 17),
    ammount: 300,
    bgcolor: "green",
  },
  {
    id: 3,
    title: "Ear Phones",
    date: new Date(2019, 6, 17),
    ammount: 60,
    bgcolor: "dark-pink",
  },
];

const App = () => {
  const [updateExpanse, setUpdateExpanse] = useState(expeseArray);
  const addExpnaseHandler = (param) => {
    setUpdateExpanse((previousexp) => {
      return [param, ...previousexp];
    });
  };
  // const filterValue = [
  //   [90, 20, 30],
  //   [30, 2, 10],
  //   [11, 2, 100],
  //   [4, 8, 10],
  // ];

  // const filterValue2 = [
  //   {
  //     2022: [10, 20, 30],
  //   },
  //   {
  //     2021: [29, 50, 100],
  //   },
  //   {
  //     2020: [11, 40, 10],
  //   },
  //   {
  //     2019: [4, 8, 10],
  //   },
  // ];

  // const clickhandlerbutton = () => {
  //   console.log("new");
  // };
  // const clickhandler = () => {
  //   console.log("hello Click Handler");
  // };

  return (
    <div className="Main-Container">
      <div></div>
      {/* <TabFunction></TabFunction> */}
      {/* <Counter></Counter> */}
      {/* <ScrollableDiv></ScrollableDiv> */}
      {/* <NewButton
        label={"My Button"}
        class={"red_btn"}
        width={"200"}
        type={"submit"}
      ></NewButton>
      <NewButton
        label={"Add"}
        class={"blue_btn"}
        width={"100"}
        type={"button"}
      ></NewButton> */}
      <NewExpanse submitExpanseShow={addExpnaseHandler}></NewExpanse>

      {/* <CheckInputlength></CheckInputlength> */}
      <Expanses arrlist={updateExpanse}></Expanses>
      {/* <Dummy></Dummy> */}
      {/* <Mybox></Mybox> */}
      {/* {expeseArray.map((arr) => (
        <ExpenseList
          key={arr.id}
          expenseId={arr.id + 1}
          expenseTitle={arr.title}
          expenseDate={arr.date}
          expenseAmmount={arr.ammount}
          bgcolor={arr.bgcolor}
        ></ExpenseList>
      ))} */}

      {/* <ExpenseList
        expenseId={expeseArray[0].id + 1}
        expenseTitle={expeseArray[0].title}
        expenseDate={expeseArray[0].date}
        expenseAmmount={expeseArray[0].ammount}
        bgcolor={"red"}
      ></ExpenseList> */}
      {/* <button onClick={clickhandler}>Hello</button> */}
      {/* <button
        onClick={() => {
          alert(window.screen.height);
        }}
      >
        {" "}
        Btn 2
      </button> */}
      <Button
        color={"red"}
        title={"red"}
        onClick={() => {
          console.log("hello");
        }}
      ></Button>
      {/* <ExpenseList
        expenseId={expeseArray[1].id + 1}
        expenseTitle={expeseArray[1].title}
        expenseDate={expeseArray[1].date}
        expenseAmmount={expeseArray[1].ammount}
        bgcolor={"blue"}
      ></ExpenseList> */}
      <Button color={"blue"} title={"blue"}></Button>
      {/* <ExpenseList
        expenseId={expeseArray[2].id + 1}
        expenseTitle={expeseArray[2].title}
        expenseDate={expeseArray[2].date}
        expenseAmmount={expeseArray[2].ammount}
        bgcolor={"green"}
      ></ExpenseList> */}
      <Button color={"green"} title={"green"}></Button>
      <Button color={"green"} title={"green"}></Button>

      {/* <button onClick={clickhandlerbutton}>Abc</button> */}
    </div>
  );
};
export default App;
