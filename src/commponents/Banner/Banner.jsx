import React from "react";
import Style from "./Banner.module.css";
import flowerImg from "../../img/flower_img.png";
import money from "../../img/money_img.png";
import deliveryCar from "../../img/deliveryCar.png";
function Banner() {
  return (
    <div className={Style.banner}>
      <p className={Style.title_banner}>Быстрая доставка цветов в Сочи</p>
      <p className={Style.title_banner_text}>
        Соберем букет и привезем за 60 минут.
        <br /> Бесплатная доставка по городу от 3000 руб.
      </p>
      <div className={Style.banner_info}>
        <div className={Style.banner_card}>
          <p className={Style.text_info}>
            Букеты собираются
            <br />
            опытными флористами
          </p>
          <img src={flowerImg} alt="" />
        </div>
        <div className={Style.banner_card}>
          <p className={Style.text_info}>
            Скидка 7% на первый
            <br />
            заказ
          </p>
          <img src={money} alt="" />
        </div>
        <div className={Style.banner_card}>
          <p className={Style.text_info}>
            Быстрая достака <br />
            24 часа
          </p>
          <img className={Style.info_img} src={deliveryCar} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
