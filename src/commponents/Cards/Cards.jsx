import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import style from './Card.module.css'

function Cards(props) {
  return <div className={style.card}>
    <Card >
        <CardContent >
          {/* <p>{props.item.name}</p>
          <p>{props.item.price + 'за шт.'}</p> */}
          <p>{props.item}</p>
          <p>{props.item}</p>
        </CardContent>
      </Card>
  </div>;
}

export default Cards;
