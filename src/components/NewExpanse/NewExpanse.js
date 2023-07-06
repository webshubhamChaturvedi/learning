import React from "react";
import ExpanseForm from "./ExpanseForm";
// import ExpanseDummy from "./FormDummy";   //check for indivisual as well combined state

const NewExpanse = (props) => {
  const getExpanseData = (expanseParam) => {
    const StoreData = {
      id: Math.round(Math.random() * 10).toString(),
      ...expanseParam,
    };
    props.submitExpanseShow(StoreData);
  };
  return (
    <div className="new-expense">
      <ExpanseForm onSubmitExpanseData={getExpanseData}></ExpanseForm>
      {/* <ExpanseDummy></ExpanseDummy> */}
    </div>
  );
};

export default NewExpanse;
