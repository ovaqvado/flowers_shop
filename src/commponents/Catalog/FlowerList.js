import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../../index";
import { Row } from "react-bootstrap";
import FlowerItem from "./FlowerItem";
import Style from "./Catalog.module.scss";

const FlowerList = observer(() => {
  const { flower } = useContext(Context);

  return (
    <Row className={Style.row_column}>
      {flower.flower.map((flower) => (
        <FlowerItem key={flower.id} flower={flower} />
      ))}
    </Row>
  );
});

export default FlowerList;
