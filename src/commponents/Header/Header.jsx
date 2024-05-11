import { Link } from "react-router-dom";
import { Button, animateScroll as scroll } from "react-scroll";
import Style from "./Header.module.css";
import logo from "../../img/logo_img.svg";
import Basket from "../../img/Basket.svg";
import About from "../About/About";
export const Header = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <header className={Style.head}>
      <Link to="/" className={Style.title}>
        <img className={Style.logo_img} src={logo} alt="Logo" />
      </Link>
      <div className={Style.nav_menu}>
        <Link className={Style.link} to="/">
          Главная
        </Link>
        <Link className={Style.link} to="/Catalog">
          Каталог
        </Link>
        <Button
          className={Style.link}
          activeClass="active"
          to="Delivery"
          spy={true}
          smooth={true}
          offset={-1}
          duration={400}
          onClick={scrollToTop}
        >
          Доставка
        </Button>
        <Button
          className={Style.link}
          activeClass="active"
          to="Contacts"
          spy={true}
          smooth={true}
          offset={-200}
          duration={500}
          onClick={scrollToTop}
        >
          Контакты
        </Button>
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
