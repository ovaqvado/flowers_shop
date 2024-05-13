import React from "react";
import car from "./images/car.svg";
import terminal from "./images/terminal.svg";
import mastercard from "./images/mastercard.svg";
import visa from "./images/visa.svg";
import mir from "./images/mir.svg";
import Style from "./Delivery.module.css";

function Delivery() {
  return (
    <div id="Delivery" className={Style.delivery_container}>
      <h1 className={Style.title_delivery}>Доставка и оплата</h1>
      <div className={Style.cards_info}>
        <div  className={Style.card_delivery}>
          <img src={car} alt="car" />
          <h3 className={Style.subtitle}>Условия доставки</h3>
          <p className={Style.text_info}>
            Мы осуществляем доставку заказов в течение 60-90 минут с момента
            размещения заказа по городу при помощи нашей собственной службы
            доставки. Мы открыты для пожеланий и готовы предоставить фотоотчет
            при вручении подарка. В праздничные дни время доставки может быть
            увеличено до 3-х часов.
            <br /> Доставка в ночное время возможна при условии, что заказ был
            оформлен в рабочее время с 8:00 до 22:00
          </p>
        </div>
        <div className={Style.card_pay}>
          <img src={terminal} alt="terminal" />
          <h3 className={Style.subtitle}>Как оплатить заказ</h3>
          <p className={Style.text_info}>
            Мы предлагаем нашим клиентам различные варианты оплаты заказов,
            чтобы каждый мог <br />
            выбрать наиболее удобный для себя.
            <br /> Вы можете оплатить заказ онлайн на нашем сайте, совершить
            перевод с помощью карты, или использовать наличные при получении
            заказа от курьера.
          </p>
          <div className={Style.payments}>
            <img className={Style.bank_cards} src={visa} alt="visa" />
            <img
              className={Style.bank_cards}
              src={mastercard}
              alt="mastercard"
            />
            <img className={Style.bank_cards} src={mir} alt="mir" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
