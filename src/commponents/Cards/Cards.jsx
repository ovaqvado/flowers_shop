import React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import style from "./Card.module.css";

function Cards(props) {
  return (
    <div className={style.card}>
      <h3>{props.card.title}</h3>
      <p>{props.item}</p>
    </div>
  );
}

export default Cards;
