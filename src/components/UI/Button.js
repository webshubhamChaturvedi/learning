import React from "react";
import "./button.css";

export default function Button(props) {
  return (
    <button
      className={`${props.color} btn`}
      onClick={props.clickevent}
      type={props.type}
    >
      {props.title}
    </button>
  );
}
