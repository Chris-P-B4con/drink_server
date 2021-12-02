import React, { useState, useEffect } from "react";

import DrinkListItem from "./DrinkListItem";
import Status from "../Status/Status";

import { MdAddCircleOutline } from "react-icons/md";

import { AddSection, Wrapper } from "./DrinkListStyles";

import { getDrinks, updateDrink } from "../../lib/drinkFunctions";
import { updateStatus } from "../../lib/helpFunctions";

function DrinkList() {
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

  const drinkHandler = async (e) => {
    e.preventDefault();
    const drink = e.currentTarget.id;
    const statusMessage = await updateDrink(drink);
    updateStatus(setStatus, statusMessage);
  };

  useEffect(() => {
    getDrinks(setStatus, setDrinks);
  }, []);

  return (
    <Wrapper>
      <h2>Getränke Editieren</h2>
      <br />

      <Status status={status} setStatus={setStatus} />
      {drinks[0].drinkName &&
        drinks.map((drink, index) => {
          return <DrinkListItem drink={drink} updateDrink={drinkHandler} />;
        })}
      <AddSection>
        <MdAddCircleOutline />
      </AddSection>
    </Wrapper>
  );
}

export default DrinkList;
