import React, { useState } from "react";

const CheckInputlength = () => {
  const [userVal, setUserVal] = useState({
    message: "",
    color: "",
  });
  const inputValueHandler = (e) => {
    let useleng = e.target.value;
    useleng.length >= 5
      ? setUserVal({
          message: "Text is Valid",
          color: "green",
        })
      : setUserVal({
          message: "Text Is not Valid",
          color: "Red",
        });
  };

  return (
    <form>
      <div>
        <lable style={{ color: "red" }}>
          Problem: if the character of the text is less then 5 then message will
          be valid,otherwise it is Not valid
        </lable>
      </div>
      <div>
        <label>Your message</label>
      </div>

      <input type="text" onChange={inputValueHandler} />
      <p style={{ color: `${userVal.color}` }}>{userVal.message}</p>
    </form>
  );
};

export default CheckInputlength;
