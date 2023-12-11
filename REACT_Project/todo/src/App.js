import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState();
  const [editTodo, setEditTodo] = useState(null);
  const [error, setError] = useState(false);
  const addTodo = (e) => {
    e.preventDefault();
    if (inputTodo !== undefined && inputTodo.trim() !== "") {
      if (editTodo !== null) {
        const updatedTodo = [...todos];
        updatedTodo[editTodo] = inputTodo;
        setTodos(updatedTodo);
        setEditTodo(null);
      } else {
        setTodos([...todos, inputTodo]);
      }
      setInputTodo("");
    } else {
      setError(true);
    }
  };
  const deleteTodo = (index) => {
    const updatedTodo = todos.filter((_, i) => i !== index);
    setTodos([...updatedTodo]);
    setInputTodo("");
  };
  const editTodoHandler = (index) => {
    setEditTodo(index);
    setInputTodo(todos[index]);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="todoform">
        <form>
          <div className="formflex">
            <input
              type="text"
              className="todoinput"
              value={inputTodo}
              onChange={(e) => {
                setInputTodo(e.target.value);
                setError(false);
              }}
            />

            <button className="btn btn-blue" onClick={addTodo}>
              Add Todo
            </button>
          </div>
          {error ? (
            <p style={{ textAlign: "left" }}>Please Enter the value</p>
          ) : (
            ""
          )}
        </form>
      </div>
      <ul className="todolist">
        {todos.map((val, index) => {
          return (
            <li key={index}>
              <span>
                {index + 1}. {val}
              </span>
              <span>
                <button
                  className="btn btn-green btn-xs"
                  onClick={() => editTodoHandler(index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-delete btn-xs"
                  onClick={() => deleteTodo(index)}
                >
                  Delete
                </button>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
