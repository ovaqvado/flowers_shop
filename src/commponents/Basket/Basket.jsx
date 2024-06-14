import React from "react";
import Style from './Basket.module.scss'
import { useSelector } from "react-redux";
function Basket() {
  const flowers = useSelector((store) => store.basketSlice.basket);
  return <div className={Style.card}>{flowers.map((flower) => (
    <li key={flower.id}>
      <img src={flower.img} alt={flower.name}  />
      <div>
        <p>{flower.name}</p>
        <p>{flower.price} руб.</p>
      </div>
    </li>
  ))}</div>;
}

export default Basket;
