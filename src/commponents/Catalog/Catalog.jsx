import React from "react";
import Style from "./Catalog.module.scss";
import { useState } from "react";
import CardList from "../Cards/CardList";

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';



function Catalog() {
  const [price, setRange] = useState([0, 100000]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);
  const handleChangeMin = (e, value) => {
    setMinPrice(value)
  };
  const handleChangeMax = (e, value) => {
    setMaxPrice(value)
  };
  const handleChangeRange = (event, newValue) => {
    setRange(newValue);
    handleChangeMin(event, newValue[0]);
    handleChangeMax(event, newValue[1]);
  };
  return (
    <div id="Catalog" className={Style.catalog_Price}>
      <fieldset className={Style.Block_Price}>
        <legend>Подобрать по цене</legend>
        <div className={Style.slider_price}>
        <Box
          style={{
            width: '1041.07px',
            borderRadius: '17.5px',
          }}
        >
          <Slider
            style={{
              color: '#ffadef',
              height: '15px',

            }}

            getAriaLabel={() => 'Price'}
            min={0}
            max={100000}
            value={price}
            onChange={handleChangeRange}
            // valueLabelDisplay="auto"
            size=""
            step={100}
          />
        </Box>
        </div>
        <div className={Style.cardPrice}>
          <div className={Style.itemCardPrice}>
            <p className={Style.textPrice}>От:{minPrice}</p>
          </div>
          <div className={Style.itemCardPrice}>
            <p className={Style.textPrice}>До:{maxPrice}</p>
          </div>
        </div>
      </fieldset>
      <div className={Style.cardList}>
        <CardList ></CardList>
      </div>

    </div>

  );
}

export default Catalog;
