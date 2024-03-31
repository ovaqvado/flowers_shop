import { Link } from "react-router-dom";
import Style from "./Header.module.css";
import logo from "../../img/logo_img.png";
export const Header = (props) => {
  return (
    <header className={Style.head}>
      <div className={Style.title}>
        <img className={Style.logo_img} src={logo} alt="Logo" />
      </div>
      <div className={Style.links}>
        <Link className={Style.link} to="/">
          Главная
        </Link>
        <Link className={Style.link} to="/Catalog">
          Каталог
        </Link>
        <Link className={Style.link} to="/Delivery">
          Доставка
        </Link>
        <Link className={Style.link} to="/Contacts">
          Контакты
        </Link>
        <Link className={Style.link} to="/About">
          О нас
        </Link>

        <div></div>
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
