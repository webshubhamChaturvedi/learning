// // import logo from './logo.svg';
// import React from "react";
// // import ScrollableDiv from "./components/Slider";
// import "./App.css";

// import Button from "./components/UI/Button";
// import Expanses from "./components/Expanses/Expenses";
// // import NewButton from "./components/newbuttonComp";
// const App = () => {
//   const expeseArray = [
//     {
//       id: 0,
//       title: "Shirts",
//       date: new Date(2023, 5, 5),
//       ammount: 100,
//       bgcolor: "red",
//     },
//     {
//       id: 1,
//       title: "T-shirts",
//       date: new Date(2023, 3, 22),
//       ammount: 150,
//       bgcolor: "blue",
//     },
//     {
//       id: 2,
//       title: "Trousers",
//       date: new Date(2023, 6, 17),
//       ammount: 300,
//       bgcolor: "green",
//     },
//     {
//       id: 3,
//       title: "Ear Phones",
//       date: new Date(2023, 6, 17),
//       ammount: 60,
//       bgcolor: "dark-pink",
//     },
//   ];
//   return (
//     <div className="Main-Container">
//       {/* <ScrollableDiv></ScrollableDiv> */}
//       {/* <NewButton
//         label={"My Button"}
//         class={"red_btn"}
//         width={"200"}
//         type={"submit"}
//       ></NewButton>
//       <NewButton
//         label={"Add"}
//         class={"blue_btn"}
//         width={"100"}
//         type={"button"}
//       ></NewButton> */}

//       <Expanses arrlist={expeseArray}></Expanses>
//       {/* <Dummy></Dummy> */}
//       {/* <Mybox></Mybox> */}
//       {/* {expeseArray.map((arr) => (
//         <ExpenseList
//           key={arr.id}
//           expenseId={arr.id + 1}
//           expenseTitle={arr.title}
//           expenseDate={arr.date}
//           expenseAmmount={arr.ammount}
//           bgcolor={arr.bgcolor}
//         ></ExpenseList>
//       ))} */}

//       {/* <ExpenseList
//         expenseId={expeseArray[0].id + 1}
//         expenseTitle={expeseArray[0].title}
//         expenseDate={expeseArray[0].date}
//         expenseAmmount={expeseArray[0].ammount}
//         bgcolor={"red"}
//       ></ExpenseList> */}
//       <Button color={"red"} title={"red"}></Button>
//       {/* <ExpenseList
//         expenseId={expeseArray[1].id + 1}
//         expenseTitle={expeseArray[1].title}
//         expenseDate={expeseArray[1].date}
//         expenseAmmount={expeseArray[1].ammount}
//         bgcolor={"blue"}
//       ></ExpenseList> */}
//       <Button color={"blue"} title={"blue"}></Button>
//       {/* <ExpenseList
//         expenseId={expeseArray[2].id + 1}
//         expenseTitle={expeseArray[2].title}
//         expenseDate={expeseArray[2].date}
//         expenseAmmount={expeseArray[2].ammount}
//         bgcolor={"green"}
//       ></ExpenseList> */}
//       <Button color={"green"} title={"green"}></Button>
//     </div>
//   );
// };
// export default App;

import React from "react";
import "./App.css";
import SimpleCardPage from "./components/SimpleCard/index";
import keyConceptsImage from "../src/assets/key-concepts.png";
import componentsImage from "../src/assets/components.png";
import stateImage from "../src/assets/state.png";
import eventsImage from "../src/assets/events.png";
import Header from "./components/SimpleCard/Header";
const concepts = [
  {
    title: "Components",
    image: componentsImage,
    description:
      "Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. Components can receive data via props, and they can render dynamic output using JSX.",
  },
  {
    title: "State",
    image: stateImage,
    description:
      "State is data that may change over time. As it changes, the UI should be updated to reflect the updated data. Each component can maintain its own state and multiple components can share state.",
  },
  {
    title: "Events",
    image: eventsImage,
    description:
      "Event handlers are added via props to (built-in) components. You pass functions as values to such event handlers to control which functions gets executed for which event.",
  },
];

const App = () => {
  return (
    <div className="MainSection">
      <Header imgpath={keyConceptsImage}></Header>
      <SimpleCardPage conceptArray={concepts}></SimpleCardPage>
    </div>
  );
};
export default App;
