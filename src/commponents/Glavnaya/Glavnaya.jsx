import React from "react";
import CardList from "../Cards/CardList";
import style from "./Glavnaya.module.css";
function Glavnaya() {
  return (
    <div className={style.cardMain}>
      <CardList />
    </div>
  );
}

export default Glavnaya;
