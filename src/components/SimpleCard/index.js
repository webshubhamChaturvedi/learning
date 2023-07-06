import React from "react";

import "./simpleCard.css";
import CardData from "./CardData";

const SimpleCardPage = (props) => {
  return (
    <div>
      <CardData carddata={props.conceptArray}></CardData>
    </div>
  );
};
export default SimpleCardPage;
