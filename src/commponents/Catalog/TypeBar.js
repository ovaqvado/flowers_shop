import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import Style from "./Catalog.module.scss";
import { Context } from "../../index";
import { ListGroup } from "react-bootstrap";

const TypeBar = observer(() => {
  const { flower } = useContext(Context);
  return (
    <ListGroup className={Style.type_box}>
      {flower.types.map((type) => (
        <ListGroup.Item
          className={Style.type_button}
          style={{ cursor: "pointer" }}
          active={type.id === flower.selectedType.id}
          onClick={() => flower.setSelectedType(type)}
          key={type.id}
        >
          {type.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
});

export default TypeBar;
