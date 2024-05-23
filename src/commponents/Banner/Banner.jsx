import React from "react";
import Style from "./Banner.module.css";
import banner_img from "../../img/banner_img.svg";
function Banner() {
  return (
    <div id="Banner" className={Style.banner_container}>
      <div className={Style.text}>
        <h1 className={Style.title}>
          Быстрая доставка <br />
          цветов по Сочи
        </h1>
        <p className={Style.sub_title}>
          Букеты собираются <br />
          опытными флористами
        </p>
        <p className={Style.sub_title}>На первый заказ скидка 7%</p>
        <p className={Style.sub_title}>
          Бесплатная доставка
          <br /> по городу от 3000р
        </p>
      </div>
      <img className={Style.img_banner} src={banner_img} alt="" />
    </div>
  );
}

export default Banner;
