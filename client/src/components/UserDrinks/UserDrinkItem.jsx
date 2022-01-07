import React, { useState, useEffect } from "react";

//Icons 
import { BiTrash } from "react-icons/bi";

//Custom Functions
import { responseHandler, updateStatus } from "../../lib/helpFunctions";

//Styled Components
import {
  ItemWrapper,
  Image,
  ItemBody,
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
        props.getDrinkHandler();
      })();
    });
  };

  useEffect(() => {
    let temp = new Date(props.drink.orderedAt);
    setDate(temp.toLocaleString());
  }, [props.drink.orderedAt]);

  return (
    <ItemWrapper>
      <Image src={props.drink.drink.image} width="75px" />
      <ItemBody>
        {props.drink.drink.price} €<i>{date}</i>
      </ItemBody>
      <ItemFooter>
        <BiTrash id={props.drink.drink.id} onClick={deleteDrink} />
      </ItemFooter>
    </ItemWrapper>
  );
}

export default UserDrinkItem;
