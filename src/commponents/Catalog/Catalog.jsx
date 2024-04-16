import React from "react";
import Style from "./Catalog.module.css";
import { useState } from "react";
function Catalog() {
  const [price, setPrice] = useState(50);

  const handleChange = (event) => {
    setPrice(event.target.value);
  };
  return (
    <div>
      <fieldset className={Style.inputPrice}>
        <legend>Подобрать по цене</legend>
        <div>
          <input
            type="range"
            min="0"
            max="5000"
            value={price}
            onChange={handleChange}
          />
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
