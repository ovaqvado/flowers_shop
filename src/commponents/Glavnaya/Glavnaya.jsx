import React from "react";
import CardList from "../Cards/CardList";
import Banner from "../Banner/Banner";
import GoogleMap from "../Maps/GoogleMap";
import style from "./Glavnaya.module.css";
import Contacts from "../Contacts/Contacts";

function Glavnaya() {
  return (
    <div className={style.cardMain}>
      <Banner />
      <CardList />
      <GoogleMap />
    </div>
  );
}

export default Glavnaya;
