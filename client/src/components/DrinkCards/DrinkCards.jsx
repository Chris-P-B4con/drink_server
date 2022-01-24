import React, { useEffect, useState } from "react";

// Components
import Status from "../Status/Status";
import DrinkCard from "./DrinkCard";
import Section from "../Section/Section";

//Custom functions
import { getDrinks, bookDrink } from "../../lib/drinkFunctions";
import { updateStatus } from "../../lib/helpFunctions";

function DrinkCards() {
  const [status, setStatus] = useState({ success: "", error: "" });
  const [drinks, setDrinks] = useState([
    {
      drinkName: "",
      available: "",
      volume: "",
      price: "",
      updatedAt: "",
      image: null,
    },
  ]);

  const getDrinkHandler = async (e) => {
    let res = await getDrinks();
    if (res.length > 0) {
      res.sort((a, b) => (a.drinkName > b.drinkName ? 1 : -1));
      setDrinks(res);
    } else {
      updateStatus(setStatus, res);
    }
  };

  const bookingHandler = async (e) => {
    e.preventDefault();
    const drink = e.currentTarget.id;
    const statusMessage = await bookDrink(drink);
    updateStatus(setStatus, statusMessage);
  };

  useEffect(() => {
    getDrinkHandler();
  }, []);

  return (
    <Section>
      <h2>Getränke Buchen</h2>
      <br></br>
      <Status status={status} setStatus={setStatus} />
      {drinks[0].drinkName &&
        drinks.map((drink) => {
          return (
            <DrinkCard
              drink={drink}
              bookDrink={bookingHandler}
              key={drink.id}
            />
          );
        })}
    </Section>
  );
}

export default DrinkCards;
