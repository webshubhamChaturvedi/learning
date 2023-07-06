import React from "react";
import Card from "./Card";
const CardData = (props) => {
  return (
    <div id="concepts">
      {props.carddata.map((arr, i) => (
        <Card key={i}>
          <img
            src={`${arr.image}`}
            alt={`${arr.image.slice(0, -4).replaceAll("/", "")}`}
          ></img>
          <h2>{arr.title}</h2>
          <p>{arr.description}</p>
        </Card>
      ))}
    </div>
  );
};
export default CardData;
