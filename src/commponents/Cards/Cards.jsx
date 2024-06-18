import React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import Style from "./Card.module.scss";

function Cards(props) {
  return (
    <div className={Style.card}>
      <h3>{props.item.name}</h3>
      <p>{props.item.price}</p>
      {/* <img src={props.item.img} /> */}
    </div>
  );
}

export default Cards;
