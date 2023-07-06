import React from "react";
const Card = (props) => {
  return <div className={`${props.className} card`}>{props.children}</div>;
};
export default Card;

// import React from "react";
// export function Todo(props) {
//   return <li className="todo">{props.children}</li>;
// }
// export default function Card(props) {
//   return <div className="card">{props.children}</div>;
// }
