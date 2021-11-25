import React, { useEffect, useState } from "react";

// Components
import Card from "../Card/Card";
import Status from "../Status/Status";
import DrinkCard from "./DrinkCard/DrinkCard";

//Custom functions
import { getDrinks, bookDrink } from "../../lib/drinkFunctions";

// Styled Components
import { Section } from "./DrinkCardsStyles.js";

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

  const bookingHandler = (e) => {
    e.preventDefault();
    const drink = e.currentTarget.id;
    const statusMessage = bookDrink(catchError, drink);
    console.log(statusMessage)
    setStatus(statusMessage)
  };

  function catchError({ success, error }) {
    console.log(success);
    console.log(error);
    if (success) setStatus({ success: success, error: "" });
    else if (error) setStatus({ success: "", error: error });
    setTimeout(() => {
      setStatus({ error: "", success: "" });
    }, 4000);
  }
  return (
    <Section>
      <h2>Getränke Buchen</h2>
      <br></br>
      <Status status={status} setStatus={setStatus} />
      {drinks.map((drink, index) => {
        return <DrinkCard drink={drink} bookDrink={bookingHandler}></DrinkCard>;
      })}
    </Section>
  );
}

export default DrinkCards;
