import React from "react";
import style from "./Card.module.css";

function CardItem(props) {
  return (
    <div className={style.card}>
      <h1>{props.item.name}</h1>
      <p>{props.item.price}</p>
    </div>
  );
}

export default CardItem;
