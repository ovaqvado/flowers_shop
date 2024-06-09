import { Link } from "react-router-dom";
import React from "react";
import Style from "./Footer.module.scss";
import telegram from "./image/telegram.svg";
import instagram from "./image/instagram.svg";
import vk from "./image/vk.svg";
import whatsapp from "./image/whatsapp.svg";
import logo_footer from "./image/logo_footer.svg";
import mir from "./image/mir.svg";
import mastercard from "./image/mastercard.svg";
import visa from "./image/visa.svg";
import logo_end_footer from "./image/logo_end_footer.svg";

function Footer() {
  return (
    <div className={Style.container_footer}>
      <div className={Style.footer_box}>
        <div className={Style.logo_social}>
          <Link to="/">
            <img
              className={Style.logo_footer}
              src={logo_footer}
              alt="logo_footer"
            />
          </Link>
          <div className={Style.group_links}>
            <Link href="">
              <img className={Style.soc_links} src={vk} alt="vk" />
            </Link>
            <Link href="">
              <img
                className={Style.soc_links}
                src={instagram}
                alt="instagram"
              />
            </Link>
            <Link href="">
              <img className={Style.soc_links} src={whatsapp} alt="whatsapp" />
            </Link>
            <Link to="">
              <img className={Style.soc_links} src={telegram} alt="telegram" />
            </Link>
          </div>
        </div>
        <div className={Style.nav_payments}>
          <div className={Style.nav_menu}>
            <Link className={Style.link} to="/">
              Главная
            </Link>
            <Link className={Style.link} to="/Catalog">
              Каталог
            </Link>
            <Link className={Style.link} to="/About">
              О нас
            </Link>
            <Link className={Style.link} to="/Delivery">
              Оплата
            </Link>
            <Link className={Style.link} to="/Delivery">
              О доставке
            </Link>
            <Link className={Style.link} to="/Contacts">
              Контакты
            </Link>
          </div>
          <div className={Style.payments}>
            <img className={Style.img_payments} src={visa} alt="visa" />
            <img
              className={Style.img_payments}
              src={mastercard}
              alt="mastercard"
            />
            <img className={Style.img_payments} src={mir} alt="mir" />
          </div>
        </div>
        <div className={Style.info}>
          <p>+7 (918) 106-70-58</p>
          <p>г.Сочи, ул.Московская 10</p>
        </div>
      </div>
      <hr />
      <div className={Style.end_logo_text}>
        <p className={Style.text_end_footer}>С любовью</p>
        <img
          className={Style.logo_end_footer}
          src={logo_end_footer}
          alt="logo_end_footer"
        />
      </div>
    </div>
  );
}

export default Footer;
