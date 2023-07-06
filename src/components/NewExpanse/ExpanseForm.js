import React, { useState } from "react";
import "./newexpanse.css";

const ExpanseForm = (props) => {
  const [title, setTitle] = useState("");
  const [ammount, setAmmount] = useState("");
  const [date, setDate] = useState("");
  const [showForm, SetShowForm] = useState(0);

  //we can also use all in single state

  // const [userInput, setUserInput] = useState({
  //   title: "",
  //   ammount: "",
  //   date: "",
  // });

  //for title change
  const titleChangeHandler = (e) => {
    // setUserInput({
    //   ...userInput,
    //   title: e.target.value,
    // });
    setTitle(e.target.value);
  };
  //for ammount change
  const ammountChangeHandler = (e) => {
    // setUserInput({
    //   ...userInput,
    //   ammount: e.target.value,
    // });
    setAmmount(e.target.value);
  };
  //for date change

  const dateChangeHandler = (e) => {
    // setUserInput({
    //   ...userInput,
    //   date: e.target.value,
    // });

    //for holdind the previous value use bolew one
    // setUserInput((previousstate) => {
    //   return {
    //     ...previousstate,
    //     date: e.target.value,
    //   };
    // });

    setDate(e.target.value);
  };

  // make single onchnage handler for input

  // const inputHandler = (identifier, value) => {
  //   if (identifier === "title") {
  //     setTitle(value);
  //   } else if (identifier === "ammount") {
  //     setAmmount(value);
  //   } else if (identifier === "date") {
  //     setDate(value);
  //   }
  // };

  //button click get state data

  const submitForm = (e) => {
    e.preventDefault();
    let formData = {
      title: title,
      ammount: ammount,
      date: new Date(date),
    };
    props.onSubmitExpanseData(formData);
    clearForm();
  };

  const clearForm = () => {
    setTitle("");
    setAmmount("");
    setDate("");
  };

  let showFormHtml = (
    <div className="new-expense__actions" style={{ textAlign: "center" }}>
      <button type="button" onClick={() => SetShowForm(1)}>
        Add New Expanse
      </button>
    </div>
  );

  if (showForm !== 0) {
    showFormHtml = (
      <form onSubmit={submitForm}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            {/* <label>{`Title:${userInput.title}`}</label>
      <label>{`Ammount:${userInput.ammount}`}</label>
      <label>{`date:${userInput.date}`}</label> */}

            <input type="text" onChange={titleChangeHandler} value={title} />
          </div>
          <div className="new-expense__control">
            <label>Ammount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={ammountChangeHandler}
              value={ammount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2023-01-01"
              max="2023-8-30"
              onChange={dateChangeHandler}
              // onChange={(e) => {
              //   inputHandler("date", e.target.value);
              // }}
              value={date}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={() => SetShowForm(0)}>
            Cancel
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  }

  return <div>{showFormHtml}</div>;
};
export default ExpanseForm;
