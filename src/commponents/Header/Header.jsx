import { Link } from "react-router-dom";
import Style from "./Header.module.css";
import logo from "../../img/logo_img.png";
import searchInput from "../../img/searchInput.png";
import Basket from "../../img/Basket.png";
export const Header = () => {
  return (
    <header className={Style.head}>
      <div className={Style.title}>
        <img className={Style.logo_img} src={logo} alt="Logo" />
        <div className={Style.title_text}>Get flowers</div>
      </div>
      <div className={Style.nav_menu}>
        <Link className={Style.link} to="/">
          Главная
        </Link>
        <Link className={Style.link} to="/Catalog">
          Каталог
        </Link>
        <Link className={Style.link} to="/Delivery">
          Доставка
        </Link>
        <Link className={Style.link}>Контакты</Link>
        <Link className={Style.link} to="/About">
          О нас
        </Link>
        <img className={Style.basket} src={Basket} alt="Basket" />
        <div className={Style.searchDiv}>
          <img className={Style.search_img} src={searchInput} alt="" />
          <input placeholder="Поиск" type="search" className={Style.input} />
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
