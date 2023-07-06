import React from "react";

const InpurField = (props) => {
  return (
    <div className={props.divClass}>
      <input
        className={`${props.className} form-control`}
        value={props.value}
        onChange={props.eventhandle}
        style={props.style}
      ></input>
    </div>
  );
};

export default InpurField;
