import React from "react";
import Style from "./Catalog.module.css";
import { useState } from "react";

function Catalog() {
  const [price, setPrice] = useState(50); // Начальное значение цены

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <div>
      <fieldset className={Style.inputPrice}>
        <legend>Подобрать по цене</legend>
        <div>
          <input
            type="range"
            id="price"
            name="price"
            min="0"
            max="100" // Устанавливаем максимальное значение диапазона
            value={price}
            onChange={handlePriceChange}
          />
          {/* <input type="range" /> */}
        </div>
        <div className={Style.cardPrice}>
          <div className={Style.itemCardPrice}>
            <p className={Style.textPrice}>От:{price}</p>
          </div>
          <div className={Style.itemCardPrice}>
            <p className={Style.textPrice}>До:{price}</p>
          </div>
        </div>
      </fieldset>
    </div>
  );
}

export default Catalog;
