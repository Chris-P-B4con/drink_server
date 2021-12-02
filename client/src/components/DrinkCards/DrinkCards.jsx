import React, { useEffect, useState } from "react";

// Components
import Status from "../Status/Status";
import DrinkCard from "./DrinkCard/DrinkCard";

//Custom functions
import { getDrinks, bookDrink } from "../../lib/drinkFunctions";
import { updateStatus } from "../../lib/helpFunctions";

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
    getDrinks(setStatus, setDrinks);
  }, []);

  const bookingHandler = async (e) => {
    e.preventDefault();
    const drink = e.currentTarget.id;
    const statusMessage = await bookDrink(drink);
    updateStatus(setStatus, statusMessage)
  };


  return (
    <Section>
      <h2>Getränke Buchen</h2>
      <br></br>
      <Status status={status} setStatus={setStatus} />
      {drinks[0].drinkName && drinks.map((drink, index) => {
        return <DrinkCard drink={drink} bookDrink={bookingHandler}></DrinkCard>;
      })}
    </Section>
  );
}

export default DrinkCards;
