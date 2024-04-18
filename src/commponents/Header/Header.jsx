import { Link } from "react-router-dom";
import { Button, animateScroll as scroll } from "react-scroll";
import Style from "./Header.module.css";
import logo from "../../img/logo_img.svg";
import searchInput from "../../img/searchInput.svg";
import Basket from "../../img/Basket.svg";
import About from "../About/About";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { searchFlowers } from "../../store/cardSlice";
export const Header = () => {
  // const [input, setInput] = useState("");
  // const dispatch = useDispatch();
  // function search(e) {
  //   setInput(e.target.value);
  //   dispatch(searchFlowers(e.target.value));

  // }
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <header className={Style.head}>
      <div className={Style.title}>
        <img className={Style.logo_img} src={logo} alt="Logo" />
        <div className={Style.title_text}>Get Flowers</div>
      </div>
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
          duration={500}
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
            <input type="text" placeholder="Search..." />
            <img
              className={Style.search_input_img}
              src={searchInput}
              alt="Search icon"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

{
  /* <div className={Style.basket}>
          <Link className={Style.link} to="/Basket">
            Корзина
          </Link>
        </div> */
}
