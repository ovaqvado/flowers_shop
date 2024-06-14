import Cards from "./Cards";
import React from "react";
import { useSelector } from "react-redux";
import Style from "./Card.module.scss";
function CardList() {
  const flowers = useSelector((store) => store.cardSlice.flower);
  return (
    <>
      <div className={Style.cards_container}>
        <p className={Style.category}>Популярные букеты</p>
        <div className={Style.cards} >
          {flowers.map((item) => (
            <Cards item={item}></Cards>
            
          ))}
          
        </div>
        
      </div>
      
    </>
  );
}

export default CardList;
