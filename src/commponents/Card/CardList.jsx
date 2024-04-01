import React from "react";
import { useSelector } from "react-redux";
import CardItem from "./CardItem";

function CardList() {
  const flowers = useSelector((store)=>store.cardSlice.cards);
  return (
    <div>
      {flowers.map((card) => (
        <CardItem key={сard.id} item={card} />
      ))}
    </div>
  );
}
export default CardList;