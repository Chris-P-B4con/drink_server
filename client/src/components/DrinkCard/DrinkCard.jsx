import React from "react";
import "./DrinkCardStyle.css";
import Card from "../Card/Card"
function DrinkCard({drink, bookDrink}) {

  return (
    <Card className="card__mini">
      <div className="drink__card__header">
        <button onClick={bookDrink} id={drink.drinkName}>
          <img src={drink.image} alt={drink.drinkName} id={drink.drinkName}/>
        </button>
      </div>
      <div className="drink__card__body">
        <h3>{drink.drinkName}</h3>
      </div>
    </Card>
  );
}

export default DrinkCard;
