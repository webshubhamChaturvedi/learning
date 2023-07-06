import React, { useState } from "react";

const ExpanseDummy = () => {
  //   const [title, setTitle] = useState("");
  //   const [ammount, setAmmount] = useState("");
  //   const [date, setDate] = useState("");

  //use Single state for all input value

  const [inputData, setInputData] = useState({
    userTitle: "",
    userAmmount: "",
    userDate: "",
  });

  //   const [inputData, setInputdata] = useState({
  //     usertitle: "",
  //     userammount: "",
  //     userdate: "",
  //   });

  const titleClick = (e) => {
    setInputData((previousState) => {
      return {
        ...previousState,
        userTitle: e.target.value,
      };
    });
  };
  const ammountClick = (e) => {
    setInputData((previousState) => {
      return {
        ...previousState,
        userAmmount: e.target.value,
      };
    });
  };
  const dataClick = (e) => {
    setInputData((previousState) => {
      return {
        ...previousState,
        userDate: e.target.value,
      };
    });
  };
  const clickBtn = () => {
    console.log(inputData.userTitle, inputData.userAmmount, inputData.userDate);
  };

  return (
    <div>
      {inputData.userTitle} {inputData.userAmmount} {inputData.userDate}
      <input type="text" onChange={titleClick} value={inputData.userTitle} />
      <input
        type="number"
        onChange={ammountClick}
        value={inputData.userAmmount}
      />
      <input type="date" onChange={dataClick} value={inputData.userDate} />
      <button onClick={clickBtn}>click me</button>
    </div>
  );
};

export default ExpanseDummy;
