import React from "react";
import { useSelector } from "react-redux";
import CardItem from "./CardItem";
import style from "./Card.module.css";
function CardList() {
  const flowers = useSelector((store) => store.cardSlice.cards);
  return (
    <div className={style.cards}>
      {flowers.map((card) => (
        <CardItem item={card} />
      ))}
    </div>
  );
}
export default CardList;
