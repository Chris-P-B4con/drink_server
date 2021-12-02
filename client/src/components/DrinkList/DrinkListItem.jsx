import React, { useState } from "react";

import { MdOutlineModeEdit } from "react-icons/md";

import {
  Image,
  ItemBody,
  ItemFooter,
  ItemWrapper,
  Title,
} from "./DrinkListStyles";

function DrinkListItem(props) {
  const [editDrink, setEditDrink] = useState(false);

  return (
    <ItemWrapper>
      <Image src={props.drink.image} />
      <ItemBody>
        <Title>{props.drink.drinkName}</Title>
        <p>Available: {props.drink.available}</p>
      </ItemBody>
      <ItemFooter>
        <MdOutlineModeEdit
          onClick={() => {
            setEditDrink(!editDrink);
          }}
        />
      </ItemFooter>
    </ItemWrapper>
  );
}

export default DrinkListItem;
