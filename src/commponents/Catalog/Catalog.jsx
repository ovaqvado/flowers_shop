import React from "react";
import Style from "./Catalog.module.scss";
import { useState } from "react";
import TypeBar from "./TypeBar";
import FlowerList from "./FlowerList";
import Pages from "./Pages";
import PriceSlider from "./PriceSlider";

function Catalog() {
  const [price, setPrice] = useState(50); // Начальное значение цены

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  return (
    <div className={Style.catalog_box}>
      <TypeBar />
      <fieldset className={Style.fieldPrice}>
        <legend className={Style.fieldText}>Подобрать по цене</legend>
        <div className={Style.cardPrice}>
          <div className={Style.itemCardPrice}>
            <p className={Style.textPrice}>От {price} р</p>
          </div>
          <hr className={Style.hr_catalog} />
          <div className={Style.itemCardPrice}>
            <p className={Style.textPrice}>До {price} р</p>
          </div>
        </div>
      </fieldset>

      <FlowerList className={Style.cards_catalog_box} />
      {/* <Pages /> */}
    </div>
  );
}

export default Catalog;
