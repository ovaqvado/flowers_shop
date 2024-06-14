import React from "react";
import { useDispatch } from "react-redux";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import Style from "./Card.module.scss";
import {addFlower} from '../../store/basketSlice'
function Cards(props) {
  const dispatch = useDispatch()
  const handleAddToBasket = () => {
    dispatch(addFlower(props.item)); // Передайте цветок к добавлению в корзину
  }
  return (
    <div className={Style.card}>
      <h3>{props.item.name}</h3>
      <p>{props.item.price}</p>
      <img src={props.item.img} />
      <button onClick={handleAddToBasket} className={Style.add_Flower}>Добавить в корзину</button>
    </div>
  );
}

export default Cards;
