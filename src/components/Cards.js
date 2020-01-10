import React from "react";
import "../App.css";

const Cards = (props) => {
  return (
    <div>
      <div class="Cards">
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default Cards;

