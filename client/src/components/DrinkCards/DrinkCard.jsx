import React, { useState, useEffect } from "react";

import Tag from "../Tag/Tag";

import { AccentLine, Article, Button, CardBody, CardHeader } from "./DrinkCardsStyles";

function DrinkCard({ drink, bookDrink }) {
  const [tagType, settagType] = useState(null);

  // Check if the drink has recently been managed. If so toggle the Tag 
  useEffect(() => {
    const curDate = new Date();
    const changedAt = new Date(drink.changedAt);
    const diff = (curDate - changedAt) / 1000 / 60 / 60 / 24;
    if (diff < 14) settagType("new");
    if (drink.available < 1) settagType("unavailable");
  }, [drink.available, drink.changedAt]);

  return (
    <Article>
      <CardHeader>
        {tagType && <Tag type={tagType}>{tagType}</Tag>}
        <Button
          type="image"
          src={drink.image}
          alt={drink.drinkName}
          id={drink.drinkName}
          onClick={bookDrink}
        />
      </CardHeader>
      <AccentLine/>
      <CardBody>
        <h2> {drink.drinkName}</h2>
      </CardBody>
    </Article>
  );
}

export default DrinkCard;
