import React, { useState } from "react";
import "./App.css";

// import Button from "./components/UI/Button";
// import Expanses from "./components/Expanses/Expenses";
// import NewExpanse from "./components/NewExpanse/NewExpanse";
import Todo from "./components/Todo/Todo";
const array = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },

  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];
const App = () => {
  const [cat, setCat] = useState(0);

  const searchtype = () => {
    setCat(`${array.category}`);
  };

  return (
    <div className="Main-Container">
      <Todo></Todo>

      <div>
        <input type="text" onChange={searchtype}></input>
        <table>
          <thead>
            <tr>
              <th> Name </th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody style={{ listStyle: "none", padding: "3rem" }}>
            <tr>
              <td>
                <b>Fruit</b>
              </td>
            </tr>
            {array
              .filter((list) => list.category === "Fruits")
              .map((list, i) => (
                <tr key={i}>
                  <td style={{ color: `${list.stocked || "red"}` }}>
                    {list.name}
                  </td>
                  <td>{list.price}</td>
                </tr>
              ))}
            <tr>
              <td>
                <b>Vegetables</b>
              </td>
            </tr>

            {array
              .filter((list) => list.category === "Vegetables")
              .map((list, i) => (
                <tr key={i}>
                  <td style={{ color: `${list.stocked || "red"}` }}>
                    {" "}
                    {list.name}{" "}
                  </td>
                  <td>{list.price}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default App;
