import React from "react";

const TodoList = (props) => {
  return (
    <li onClick={props.removeItem} id={props.id}>
      {props.value}
    </li>
  );
};
export default TodoList;
