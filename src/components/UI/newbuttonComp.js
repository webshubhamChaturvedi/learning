import React from "react";
// function Text(){
//     return (
//         <span>Button Name</span>
//     )
// }

const NewButton = (props) => {
  return (
    <button
      type={props.type}
      className={`${props.class} common-btn`}
      style={{ width: `${props.width}px` }}
    >
      {props.label}
    </button>
  );
};
export default NewButton;
