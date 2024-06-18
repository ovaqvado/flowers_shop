import React from "react";
import CardList from "../Cards/CardList";
import Banner from "../Banner/Banner";
import GoogleMap from "../Maps/GoogleMap";
import Delivery from "../Delivery/Delivery";
// import Auth from "../Auth/Auth";
import Style from "./Main.module.scss";

function Main() {
  return (
    <div className={Style.cardMain}>
      <Banner className={Style.banner_container} />
      <CardList className={Style.card_container} />
      <Delivery className={Style.delivery_container} />
      {/* <Auth /> */}
      <GoogleMap />
    </div>
  );
}

export default Main;
