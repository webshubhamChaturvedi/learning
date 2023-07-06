import React, { useState } from "react";
import TodoForm from "./Form";
import "./todo.css";

import TodoList from "./TodoList";
const Todo = () => {
  const [Updatetodo, SetUpdateTodo] = useState([]);
  const [Toaste, SetToaste] = useState("hide");
  const formData = (data) => {
    SetUpdateTodo((prev) => {
      return [...prev, data];
    });
    console.log("data", Updatetodo);
  };
  const ondeleteItem = (e) => {
    const updatedItems = Updatetodo.filter((_, i) => i !== Number(e.target.id));
    SetUpdateTodo(updatedItems);
    SetToaste("active");
    setTimeout(() => {
      SetToaste("hide");
    }, 3000);
  };

  return (
    <div className="todoBlock">
      <div className={`${Toaste} toast`}>Item Is Deleted</div>
      <TodoForm onSubmitForGetData={formData} />
      <ul className="TodoList">
        {Updatetodo.map(
          (list, i) =>
            list.trim() !== "" && (
              <TodoList
                value={list}
                key={i}
                removeItem={ondeleteItem}
                id={i}
              ></TodoList>
            )
        )}
      </ul>
    </div>
  );
};

export default Todo;
