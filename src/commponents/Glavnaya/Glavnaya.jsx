import React from "react";
import CardList from "../Cards/CardList";
import Banner from "../Banner/Banner";
import GoogleMap from "../Maps/GoogleMap";
import Style from "./Glavnaya.module.css";
import Delivery from "../Delivery/Delivery";

function Glavnaya() {
  return (
    <div className={Style.cardMain}>
      <Banner className={Style.banner_container} />
      <CardList className={Style.card_container} />
      <Delivery className={Style.delivery_container} />
      <GoogleMap />
    </div>
  );
}

export default Glavnaya;
