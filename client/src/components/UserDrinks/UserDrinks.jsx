import React, { useState, useEffect } from "react";

import Reload from "../Reload/Reload";
import Status from "../Status/Status";
import UserDrinkItem from "./UserDrinkItem";

import { Title, Wrapper } from "../DrinkList/DrinkListStyles";

import { getUserDrinks } from "../../lib/drinkFunctions";
import { updateStatus } from "../../lib/helpFunctions";

import Pagination from "../Pagination/Pagination";

function UserDrinks() {
  const [status, setStatus] = useState({ error: "", success: "" });
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(9);
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

  const getDrinkHandler = async (e) => {
    setSpin(true);
    let res = await getUserDrinks(page);
    if (res.drinks.length > 0) {
      res.drinks.sort((a, b) => (a.orderedAt > b.orderedAt ? 1 : -1));
      setDrinks(res.drinks);
      setMaxPage(res.numElem);
      setTimeout(() => {
        setSpin(false);
      }, 2000);
    } else {
      updateStatus(setStatus, res);
    }
  };

  useEffect(() => {
    getDrinkHandler();
  }, [page]);

  return (
    <Wrapper>
      <h2>Meine Getränke:</h2>
      <br />
      <Status status={status} setStatus={setStatus} />
      {drinks[0].drink.id ? (
        drinks.map((drink, index) => {
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
      <Pagination setPage={setPage} page={page} maxPage={maxPage} />
    </Wrapper>
  );
}

export default UserDrinks;
