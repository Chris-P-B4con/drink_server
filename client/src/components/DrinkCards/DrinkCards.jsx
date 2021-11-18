import React, { useState, useEffect } from "react";

import Status from "../Status/Status";
import DrinkCard from "../DrinkCard/DrinkCard";
import Card from "../Card/Card"
import {getDrinks, bookDrink} from "../../lib/drinkFunctions"
import './DrinkCardsStyles.css'
function DrinkCards() {
  const [status, setStatus] = useState({ success: "", error: "" });
  const [drinks, setDrinks] = useState([
    {
      drinkName: "",
      available: "",
      volume: "",
      price: "",
      image: null,
    },
  ]);

  useEffect(() => {
    getDrinks(catchError, setDrinks);
  }, []);

  const bookingHandler = (e) =>{
    e.preventDefault();
    const drink = e.currentTarget.id
    bookDrink(catchError, drink)
  }
  
  function catchError (err, succ){
    if (succ) setStatus({ success: succ, error: "" });
    else if (err) setStatus({ success: "", error: err });
    setTimeout(() => {
      setStatus({ error: "", success: "" });
    }, 4000);
  };
  return (
    <div className="drink__cards">
      <Status status={status} setStatus={setStatus}/>
      {drinks.map((drink, index) => {
        return <DrinkCard drink={drink} bookDrink={bookingHandler} />;
      })}
    </div>
  );
}

export default DrinkCards;