import React from "react";
// import Card from "../Card/Card";
import CardList from "../Card/CardList";
import Banner from "../Banner/Banner";
import style from "./Glavnaya.module.css";
function Glavnaya() {
  return (
    <div className={style.mainPage}>
      <Banner />
      <CardList />
    </div>
  );
}

export default Glavnaya;
