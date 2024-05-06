import Cards from "./Cards";
import React from "react";
import { useSelector } from "react-redux";
import style from "./Card.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
function CardList() {
  const flowers = useSelector((store) => store.cardSlice.flower);
  return (
    <>
      <div className={style.cards}>
        {flowers.map((item) => (
          <Cards item={item}></Cards>
        ))}
      </div>
      <div className={style.cards}>
        {flowers.map((item) => (
          <Cards item={item}></Cards>
        ))}
      </div>
    </>
  );
}

export default CardList;
