import React from "react";
<<<<<<< HEAD
// import Card from "../Card/Card";
import CardList from "../Card/CardList";
import Banner from "../Banner/Banner";
import style from "./Glavnaya.module.css";
function Glavnaya() {
  return (
    <div className={style.mainPage}>
      <Banner />
=======
import CardList from "../Cards/CardList";
import style from "./Glavnaya.module.css";
function Glavnaya() {
  return (
    <div className={style.cardMain}>
>>>>>>> cf3af77e83a4f4570f41a97ab7a166623ccd641a
      <CardList />
    </div>
  );
}

export default Glavnaya;
