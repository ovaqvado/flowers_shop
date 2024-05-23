import { Link } from "react-router-dom";

import Style from "./Header.module.css";
import logo from "../../img/logo_img.svg";
import Basket from "../../img/Basket.svg";
import About from "../About/About";
export const Header = () => {
  const smoothScrollToAnchor = (anchor) => {
    const target = document.querySelector(anchor);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };
  
  return (
    <header className={Style.head}>
      <Link to="/" className={Style.title}>
        <img onClick={() => smoothScrollToAnchor("#Banner")} to="/#Banner" className={Style.logo_img} src={logo} alt="Logo" />
      </Link>
      <div className={Style.nav_menu}>
        <Link onClick={() => smoothScrollToAnchor("#Banner")} className={Style.link} to="/#Banner">
          Главная
        </Link>
        <Link className={Style.link} to="/Catalog">
          Каталог
        </Link>
        <Link
          onClick={() => smoothScrollToAnchor("#Delivery")}
          to="/#Delivery"
          className={Style.link}
        >
          Доставка
        </Link>
        <Link
          onClick={() => smoothScrollToAnchor("#Contacts")}
          to="/#Contacts"
          className={Style.link}
        >
          Контакты
        </Link>
        <Link className={Style.link} to="/About">
          О нас
        </Link>
        <img className={Style.basket} src={Basket} alt="Basket" />
        <div className={Style.box}>
          <div className={Style.search_bar}>
            <input type="text" placeholder="Поиск" />
          </div>
        </div>
      </div>
    </header>
  );
};