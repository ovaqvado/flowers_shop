import React from "react";
import style from './Card.module.css'

function CardItem(props) {
  return (
    <div className={style.card}>
      <h1>{props.name}</h1>
      <p>{ 'за шт.'}</p>
    </div>
  );
}

export default CardItem;