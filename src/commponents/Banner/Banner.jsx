import React from "react";
import Style from "./Banner.module.scss";
import banner_img from "../../img/banner_img.svg";
import { ReactComponent as PtmReportLogo } from "../../img/list_banner.svg";

function Banner() {
  return (
    <div className={Style.banner_container}>
      <div className={Style.text}>
        <h1 className={Style.title}>
          Быстрая доставка <br />
          цветов по Сочи
        </h1>
        <ul className={Style.ul}>
          <li className={Style.sub_title}>
            <PtmReportLogo />
            <span>
              {" "}
              Букеты собираются <br />
              опытными флористами
            </span>
          </li>
          <li className={Style.sub_title}>
            <PtmReportLogo />
            <span>На первый заказ скидка 7%</span>
          </li>
          <li className={Style.sub_title}>
            <PtmReportLogo />
            <span>
              {" "}
              Бесплатная доставка
              <br /> по городу от 3000р
            </span>
          </li>
        </ul>
      </div>
      <img className={Style.img_banner} src={banner_img} alt="banner_img" />
    </div>
  );
}

export default Banner;
