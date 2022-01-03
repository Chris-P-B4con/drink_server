import React, { useState, useEffect } from "react";

import { BiTrash } from "react-icons/bi";
import { responseHandler, updateStatus } from "../../lib/helpFunctions";

import {
  ItemWrapper,
  Image,
  ItemBody,
  Title,
  ItemFooter,
} from "../DrinkList/DrinkListStyles";

function UserDrinkItem(props) {
  const [date, setDate] = useState("");
  const deleteDrink = (e) => {
    e.preventDefault();
    fetch(`/drinks/deleteBooking/${props.drink.id}`, {
      method: "POST",
    }).then((response) => {
      (async () => {
        const serverMessage = await responseHandler(response);
        updateStatus(props.setStatus, serverMessage);
        props.getDrinkHandler()
      })();
    });
  };

  useEffect(() => {
    let temp = new Date(props.drink.orderedAt);
    setDate(temp.toLocaleString());
  }, []);

  return (
    <ItemWrapper>
      <Image src={props.drink.drink.image} width="75px" />
      <ItemBody className={props.editDrink ? "show" : ""}>
        <p>{props.drink.drink.price} €</p>
        <p>
          <i>{date}</i>
        </p>
      </ItemBody>
      <ItemFooter className={props.editDrink ? "show" : ""}>
        <BiTrash id={props.drink.drink.id} onClick={deleteDrink} />
      </ItemFooter>
    </ItemWrapper>
  );
}

export default UserDrinkItem;
