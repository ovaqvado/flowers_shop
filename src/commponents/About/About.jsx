import { React, useState } from "react";
import Style from "./About.module.scss";

const About = () => {
  const [yandexWindowVisible, setYandexWindowVisible] = useState(true);
  const [gisWindowVisible, setGisWindowVisible] = useState(false);

  const hideYandexWindow = () => {
    setYandexWindowVisible(false);
    setGisWindowVisible(true);
  };

  const hideGisWindow = () => {
    setYandexWindowVisible(true);
    setGisWindowVisible(false);
  };

  return (
    <div className={Style.box}>
      <div className={Style.service}>
        <h2 className={Style.title}>
          Get Flowers — сервис доставки цветов по Сочи
        </h2>
        <div className={Style.container_info}>
          <ul className={Style.container_text}>
            <li className={Style.text_info}>
              У нас вы легко найдёте поздравление для любого случая и сможете
              отправить его близким, где бы они не находились. Все ваши заботы
              мы возьмем на себя: вам останется только выбрать цветы в нашем
              онлайн-магазине цветов.
            </li>
            <li className={Style.text_info}>
              Наша самая сильная сторона — полная вертикальная интеграция всех
              процессов. Мы контролируем каждый этап вашего заказа: от поиска
              цветов на плантациях до вручения готового букета получателю. Мы
              сами поставляем цветы с плантаций, создаем дизайн цветочных
              композиций и управляем их сборкой и доставкой.
            </li>
            <li className={Style.text_info}>
              Доверяя нам передачу ваших чувств, вы можете быть уверены, что
              свежие цветы будут доставлены вовремя и в самом лучшем виде.
            </li>
          </ul>
        </div>
        <h2 className={Style.title}>
          Основные преимущества работы с сервисом:
        </h2>
        <div className={Style.container_info}>
          <ul className={Style.container_text}>
            <h3 className={Style.subtitle}>Удобно:</h3>
            <div className={Style.container_all_text}>
              <li className={Style.text_info}>
                Развитая сеть доставки: Мы доставляем ваши эмоции и чувства даже
                в самые далекие и экзотические страны - которых уже больше 100!
              </li>
              <li className={Style.text_info}>
                Автоматическая система расчета заказа: Мы всегда онлайн сообщим
                вам конечную стоимость и букета, и его доставки. И не потребуем
                доплат;
              </li>
              <li className={Style.text_info}>
                Разнообразие способов оплаты: Вы всегда сможете выбрать удобный
                для вас метод оплаты.
              </li>
            </div>
            <h3 className={Style.subtitle}>Надежно:</h3>
            <div className={Style.container_all_text}>
              <li className={Style.text_info}>
                Защита персональной информации: Все ваши персональные данные
                будут под нашей надежной защитой.
              </li>
              <li className={Style.text_info}>
                Мы всегда заботимся о вашей приватности; Гарантия качества
                цветов: Мы тщательно проверяем каждый цветок, из которых
                составляются наши букеты. И если вы останетесь недовольны -
                переделаем заказ;
              </li>
              <li className={Style.text_info}>
                Фотоконтроль: По вашему желанию флорист сфотографирует букет
                перед отправкой, а курьер сделает фото получателя с вашим
                подарком;
              </li>
            </div>
            <div className={Style.container_all_text}>
              <h3 className={Style.subtitle}>Выгодно:</h3>
              <li className={Style.text_info}>
                Бонусная система: Уже с первого выполненного заказа вы получите
                большие бонусы, которые сможете сразу использовать;
              </li>
              <li className={Style.text_info}>
                Регулярные акции: Зарегистрируйтесь в своем личном кабинете и
                получайте самые выгодные предложения первыми!;
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className={Style.box_reviews}>
        <h2 className={Style.title_about}>Нас высоко оценивают клиенты</h2>
        <div className={Style.buttons}>
          <button onClick={hideGisWindow} className={Style.button_reviews}>
            Яндекс
          </button>
          <button onClick={hideYandexWindow} className={Style.button_reviews}>
            2Gis
          </button>
        </div>
        <div className={Style.block_reviews}>
          <div className={Style.reviews}>
            {yandexWindowVisible && (
              <iframe
                src="https://swdgts.ru/925b6a0ecce26b32c44bc5456bc13de2"
                width="100%"
                height="700"
                frameborder="0"
              ></iframe>
            )}
            {gisWindowVisible && (
              <iframe
                src="https://swdgts.ru/9ae5e9cc027a91fe063694081a32cc1f"
                width="100%"
                height="700"
                frameborder="0"
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
