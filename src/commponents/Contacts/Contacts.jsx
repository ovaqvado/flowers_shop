import React from "react";
import Style from "./Contacts.module.css";
import phone from "./image/phone.svg";
import clock from "./image/clock.svg";
import markLocation from "./image/markLocation.svg";

function Contacts() {
  return (
    <div id="section2" className={Style.main_container}>
      <h1 className={Style.title_contact}>Контакты</h1>
      <div className={Style.container_card}>
        <div className={Style.contact}>
          <img className={Style.img} src={phone} alt="phone_number" />
          <p className={Style.text}>+7 (918) 106-70-58</p>
        </div>

        <div className={Style.contact}>
          <img className={Style.img} src={clock} alt="" />
          <p className={Style.text}>Принимаем заказы с 8:00 до 22:00</p>
        </div>

        <div className={Style.contact}>
          <img className={Style.mark_location} src={markLocation} alt="" />
          <p className={Style.text}>г. Сочи, ул. Московская 10</p>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
