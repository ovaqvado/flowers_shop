import React from "react";
import Style from "./Delivery.module.css";
import mastercard from "./images/mastercard.svg";
import visa from "./images/visa.svg";
import mir from "./images/mir.svg";
import qiwi from "./images/qiwi.svg";
import car from "./images/car.svg";
import terminal from "./images/terminal.svg";

function Delivery() {
  return (
    <div id="Delivery" className={Style.container_delivery}>
      <h1 className={Style.delivery_text}>Доставка и оплата</h1>
      <div className={Style.cards_delivery}>
        <div className={Style.info_delivery_pay}>
          <img className={Style.img_delivery_pay} src={car} alt="car" />
          <h3 className={Style.info_title}>Условия доставки</h3>
          <p className={Style.info_subtitle}>
            Мы осуществляем доставку заказов в течение 60-90 минут с момента
            размещения заказа по городу при помощи нашей собственной службы
            доставки. Мы открыты для пожеланий и готовы предоставить фотоотчет
            при вручении подарка. В праздничные дни время доставки может быть
            увеличено до 3-х часов.
          </p>
          <p className={Style.info_subtitle}>
            Доставка в ночное время возможна при условии, что заказ был оформлен
            в рабочее время с 8:00 до 22:00.
          </p>
        </div>
        <div className={Style.info_delivery_pay}>
          <img
            className={Style.img_delivery_pay}
            src={terminal}
            alt="terminal"
          />
          <h3 className={Style.info_title}>Как оплатить заказ</h3>
          <p className={Style.info_subtitle}>
            Мы предлагаем нашим клиентам различные варианты оплаты заказов,
            чтобы каждый мог выбрать наиболее удобный для себя. <br /> Вы можете
            оплатить заказ онлайн на нашем сайте, совершить перевод с помощью
            карты, или использовать наличные при получении заказа от курьера.
          </p>
          <div className={Style.img_payments}>
            <img className={Style.method_payment} src={visa} alt="visa" />
            <img
              className={Style.method_payment}
              src={mastercard}
              alt="mastercard"
            />
            {/* <img className={Style.visa} src={qiwi} alt="qiwi" /> */}
            <img className={Style.method_payment} src={mir} alt="mir" />
          </div>
        </div>
      </div>
      {/* <div className={Style.price_delivery}></div> */}
    </div>
  );
}

export default Delivery;
