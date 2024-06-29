import React from "react";
import { Col, Card, Image } from "react-bootstrap";
import Style from "./Catalog.module.scss";

const FlowerItem = ({ flower }) => {
  return (
    <Col className={Style.cards_box} md={3}>
      <Card height={600} className={Style.card_flower}>
        <Image
          className={Style.img_flower}
          width={400}
          height={500}
          src={flower.img}
        />
        <div className={Style.flower_name}>{flower.name}</div>
        <div className={Style.button_price}>
          {" "}
          <div>{flower.price + " р"} </div>
          <button className={Style.button_add_flower}>В корзину</button>
        </div>
      </Card>
    </Col>
  );
};

export default FlowerItem;
