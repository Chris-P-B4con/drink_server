import React from "react";
import Card from "../../Card/Card";

import "./DrinkStyles.css"
import { FiEdit3 } from "react-icons/fi";

function Drink(props) {
  return (
    <Card className="drink">
      <div className="drink__body__left">
        <img src={props.drink.image} alt={props.drink.drinkName} />
      </div>
      <div className="drink__body">
        <div className="drink__body__center">
          <p>{props.drink.drinkName}</p>
          <p>Available: {props.drink.available}</p>
        </div>
        <div className="drink__body__right">
          <FiEdit3 />
        </div>
      </div>
    </Card>
  );
}

export default Drink;
