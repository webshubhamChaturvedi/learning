import React, { useState } from "react";

const TabFunction = () => {
  const [contentData, setContentdata] = useState(0);
  const content = [
    [
      "React is extremely popular",
      "It makes building complex, interactive UIs a breeze",
      "It's powerful & flexible",
      "It has a very active and versatile ecosystem",
    ],
    [
      "Components, JSX & Props",
      "State",
      "Hooks (e.g., useEffect())",
      "Dynamic rendering",
    ],
    [
      "Official web page (react.dev)",
      "Next.js (Fullstack framework)",
      "React Native (build native mobile apps with React)",
    ],
    [
      "Vanilla JavaScript requires imperative programming",
      "Imperative Programming: You define all the steps needed to achieve a result",
      "React on the other hand embraces declarative programming",
      "With React, you define the goal and React figures out how to get there",
    ],
  ];
  return (
    <div>
      <div className="buttonSec">
        <button
          className={`${contentData === 0 ? "active" : ""} expense-item__price`}
          onClick={() => setContentdata(0)}
        >
          Button A
        </button>
        <button
          className={`${contentData === 1 ? "active" : ""} expense-item__price`}
          onClick={() => setContentdata(1)}
        >
          Button B
        </button>
        <button
          className={`${contentData === 2 ? "active" : ""} expense-item__price`}
          onClick={() => setContentdata(2)}
        >
          Button C
        </button>
        <button
          className={`${contentData === 3 ? "active" : ""} expense-item__price`}
          onClick={() => setContentdata(3)}
        >
          Button D
        </button>
      </div>
      <div className="tab">
        <ul>
          {content[contentData].map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TabFunction;
