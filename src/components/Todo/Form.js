import React, { useState } from "react";
import Card from "../UI/Card";
import InpurField from "./inputField";
import Button from "../UI/Button";
const TodoForm = (props) => {
  const [getInputval, SetInputVal] = useState(" ");
  const [error, setError] = useState({
    errormsg: "",
    errorclass: "",
    Isvalid: false,
  });

  const GetTodo = (e) => {
    e.preventDefault();
    props.onSubmitForGetData(getInputval);
    SetInputVal(" ");

    if (getInputval.trim().length === 0) {
      setError({
        ...error,
        errormsg: "Please Enter The Vlaue",
        errorclass: "error",
        Isvalid: true,
      });
    } else {
      setError("");
    }
  };
  const InputVal = (e) => {
    SetInputVal(e.target.value);
    setError({
      errormsg: "",
      errorclass: "",
      Isvalid: false,
    });
  };
  return (
    <Card className="formCard">
      <div>
        <form onSubmit={GetTodo}>
          <h3
            style={{ color: !error.Isvalid ? "black" : "red" }}
            className={!error.Isvalid ? "red" : "black"}
          >
            Course Goal
          </h3>
          <InpurField
            className={`courseGoalInput ${error.errorclass}`}
            divClass={"form-group"}
            value={getInputval}
            eventhandle={InputVal}
            //  addstyle={(getInputval===null||getInputval===null)?'error':''}
            style={{
              border: `1px solid  ${!error.Isvalid ? "black" : "red"}`,
              background: ` ${!error.Isvalid ? "transparent" : "#f54d4d4a"}`,
            }}
          ></InpurField>
          <p className={error.errorclass}>{error.errormsg}</p>
          <Button
            color="btn-blue"
            title="Add Goal"
            clickevent={GetTodo}
            type="submit"
          />
        </form>
      </div>
    </Card>
  );
};

export default TodoForm;
