import Cards from "./Cards";
import React from "react";
import { useSelector } from "react-redux";
import Style from "./Card.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowLeft from "./left_arrow.svg";
import ArrowRight from "./right_arrow.svg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "./left_arrow.svg",
        content: "<",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
}

function CardList(props) {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 100,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // autoplaySpeed: 6000,
    // autoplay: true,
  };
  const flowers = useSelector((store) => store.cardSlice.flower);
  return (
    <div className={Style.cards_container}>
      <p className={Style.title_cards}>Популярные букеты</p>
      <Slider className={Style.slider} {...settings}>
        {/* <div className={Style.cards}> */}
        {flowers.map((item) => (
          <Cards item={item}></Cards>
        ))}
        {/* </div> */}
      </Slider>
    </div>
  );
}

export default CardList;

// <>
// <div className={Style.cards_container}>
//   <p className={Style.category}>Популярные букеты</p>
//   <div className={Style.cards}>
//     {flowers.map((item) => (
//       <Cards item={item}></Cards>
//     ))}
//   </div>
// </div>
// </>
