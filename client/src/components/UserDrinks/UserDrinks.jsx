import React, { useState, useEffect } from "react";

import Reload from "../Reload/Reload";
import Status from "../Status/Status";
import UserDrinkItem from "./UserDrinkItem";

import { Title, Wrapper } from "../DrinkList/DrinkListStyles";

import { getUserDrinks } from "../../lib/drinkFunctions";
import { updateStatus } from "../../lib/helpFunctions";

function UserDrinks() {
  const [status, setStatus] = useState({ error: "", success: "" });
  const [drinks, setDrinks] = useState([
    {
      id: null,
      drink: {
        id: "",
        drinkName: "",
        available: "",
        volume: "",
        price: "",
        image: null,
        orderedAt: null,
      },
      orderedAt: null,
    },
  ]);
  const [spin, setSpin] = useState(true);

  let total = 0;
  const getDrinkHandler = async (e) => {
    setSpin(true);
    let res = await getUserDrinks();
    if (res.length > 0) {
      res.sort((a, b) => (a.orderedAt > b.orderedAt ? 1 : -1));
      setDrinks(res);
      setTimeout(() => {
        setSpin(false);
      }, 2000);
    } else {
      updateStatus(setStatus, res);
    }
  };

  useEffect(() => {
    getDrinkHandler();
  }, []);

  return (
    <Wrapper>
      <h2>Meine Getränke:</h2>
      <br />
      <Status status={status} setStatus={setStatus} />
      {drinks[0].drink.id ? (
        drinks.map((drink, index) => {
          total += drink.drink.price;
          return (
            <UserDrinkItem
              drink={drink}
              setStatus={setStatus}
              getDrinkHandler={getDrinkHandler}
            />
          );
        })
      ) : (
        <Reload
          spin={spin}
          alignment="center"
          reloadHandler={getDrinkHandler}
        />
      )}
      <Title>Total: {total.toFixed(2)}</Title>
    </Wrapper>
  );
}

export default UserDrinks;
