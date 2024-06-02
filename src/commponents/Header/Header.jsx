import { Link } from "react-router-dom";

import Style from "./Header.module.scss";
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
    <header className={Style.header}>
      <Link to="/" className={Style.link}>
        <img className={Style.logo_header} src={logo} alt="Logo" />
      </Link>
      <div className={Style.group_links}>
        <Link className={Style.link} to="/">
          Главная
        </Link>
        <Link className={Style.link} to="/Catalog">
          Каталог
        </Link>
        <Link
          onClick={() => smoothScrollToAnchor("#section1")}
          to="/#section1"
          className={Style.link}
        >
          Доставка
        </Link>
        <Link
          onClick={() => smoothScrollToAnchor("#section2")}
          to="/#section2"
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
