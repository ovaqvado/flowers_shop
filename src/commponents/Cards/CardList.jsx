import React from "react";
import { connect } from "react-redux";
import style from "./Card.module.css";
const CardList = ({ cards }) => {
  return (
    <div className={style.cards}>
      {cards.map((card) => (
        <div className={style.card}>
          <h3>{card.title}</h3>
          <p>{card.description + "за штуку сука"}</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
  };
};

export default connect(mapStateToProps)(CardList);
