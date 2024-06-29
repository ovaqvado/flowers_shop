import React, { useState, Component } from "react";
import "./Catalog.module.scss";
import "rc-slider/assets/index.css";

const PriceSlider = () => {
  const [value1, setValue1] = useState(50);
  const [value2, setValue2] = useState(50);

  const handleSlider1Change = (e) => {
    setValue1(e.target.value);
  };

  const handleSlider2Change = (e) => {
    setValue2(e.target.value);
  };

  return (
    <div className="slider-container">
      <input
        type="range"
        min="0"
        max="100"
        value={value1}
        onChange={handleSlider1Change}
        className="slider"
      />
      <input
        type="range"
        min="0"
        max="100"
        value={value2}
        onChange={handleSlider2Change}
        className="slider"
      />
    </div>
  );
};

export default PriceSlider;
