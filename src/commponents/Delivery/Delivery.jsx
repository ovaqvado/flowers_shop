import car from "./images/car.svg";
import terminal from "./images/terminal.svg";
import mastercard from "./images/mastercard.svg";
import visa from "./images/visa.svg";
import mir from "./images/mir.svg";
import yandex_pay from "./images/yandex_pay.svg";
import Style from "./Delivery.module.scss";

function Delivery() {
  return (
    <div id="section1" className={Style.delivery_container}>
      <h1 className={Style.title_delivery}>Доставка и оплата</h1>
      <div className={Style.box}>
        <div className={Style.cards_info}>
          <div className={Style.card_delivery}>
            <img className={Style.img} src={car} alt="car" />
            <h3 className={Style.subtitle}>Условия доставки</h3>
            <p className={Style.text_info}>
              Мы осуществляем доставку заказов в <br /> течение 60-90 минут с
              момента размещения <br /> заказа. Доставка в ночное время возможна{" "}
              <br /> при условии, что заказ был оформлен в <br /> рабочее время
              с 8:00 до 22:00
            </p>
            <div className={Style.select}>
              <p className={Style.select_text}>Cтоимость доставки:</p>
              <select className={Style.select_address}>
                <option value="">Узнать</option>
                <option className={Style.select_primary} value="1">
                  Сочи 200-Рублей
                </option>
                <option className={Style.select_secondary} value="2">
                  Дагомыс 400-Рублей
                </option>
                <option className={Style.select_primary} value="3">
                  Мацеста 400-Рублей
                </option>
                <option className={Style.select_secondary} value="4">
                  Адлер 600-Рублей
                </option>
                <option className={Style.select_primary} value="5">
                  Кудепста 250-Рублей
                </option>
              </select>
            </div>
          </div>
          <div className={Style.card_pay}>
            <img className={Style.img} src={terminal} alt="terminal" />
            <h3 className={Style.subtitle}>Как оплатить заказ</h3>
            <p className={Style.text_info}>
              Вы можете оплатить заказ онлайн на нашем <br /> сайте, совершить
              перевод с помощью карты, <br /> или использовать наличные при
              получении <br /> заказа от курьера.
            </p>
            <div className={Style.payments}>
              <img className={Style.bank_cards} src={visa} alt="visa" />
              <img
                className={Style.mastercard}
                src={mastercard}
                alt="mastercard"
              />
              <img
                src={yandex_pay}
                alt="yandex_pay"
                className={Style.yandex_card}
              />
              <img className={Style.bank_cards} src={mir} alt="mir" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
