import React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
import Style from "./Card.module.scss";

function Cards(props) {
  return (
    <div className={Style.card}>
      <img className={Style.img_card_slider} src={props.item.img} />
    </div>
  );
}

export default Cards;
