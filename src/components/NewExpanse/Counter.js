import React, { useState } from "react";

const Counter = () => {
  const [counter, CounterInc] = useState(0);

  const counterHandler = () => {
    // let counterVal = counter;
    CounterInc((prev) => {
      return prev + 1;
    });
  };

  return (
    <div>
      <p id="counter">{counter}</p>
      <button onClick={counterHandler}>Increment</button>
    </div>
  );
};

export default Counter;
