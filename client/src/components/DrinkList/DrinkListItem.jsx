import React, { Fragment, useState } from "react";

import { MdOutlineModeEdit } from "react-icons/md";

import Status from "../Status/Status";

import { ActionWrapper, Button, Input } from "../Forms/FormStyles";
import {
  Image,
  ItemBody,
  ItemExpanded,
  ItemFooter,
  ItemWrapper,
  Title,
} from "./DrinkListStyles";
import { updateStatus } from "../../lib/helpFunctions";

function DrinkListItem(props) {
  const [status, setStatus] = useState({ success: "", error: "" });
  const [editDrink, setEditDrink] = useState(false);

  const deleteButton = (e) => {
    fetch(`/drinks/delete/${props.drink.id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 500) {
          updateStatus(setStatus, {
            error: "Something went wrong.",
            succes: "",
          });
        }
        return res.json();
      })
      .then((stat) => {
        updateStatus(setStatus, stat);
        props.getDrinkHandler();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editDrinkHandler = (e) => {
    const formData = new FormData();
    formData.append("drinkName", props.drink.drinkName);
      formData.append("available", props.drink.available);
      formData.append("price", props.drink.price);
      formData.append("volume", props.drink.volume);
      formData.append(
        "file",
        document.querySelector('input[type="file"]').files[0]
      );
      (async () => {
        const statusMessage = await props.updateDrink(formData, true);
        updateStatus(setStatus, statusMessage);
        setTimeout(() => {
          props.getDrinkHandler();
        }, 3000);
      })();
  };
  return (
    <Fragment>
      <Status status={status} />
      <ItemWrapper className={editDrink ? "show" : ""}>
        <Image className={editDrink ? "show" : ""} src={props.drink.image} />
        <ItemBody className={editDrink ? "show" : ""}>
          <Title>{props.drink.drinkName}</Title>
          <p>Available: {props.drink.available}</p>
        </ItemBody>
        <ItemFooter className={editDrink ? "show" : ""}>
          <MdOutlineModeEdit
            id={props.drink.id}
            onClick={() => {
              setEditDrink(!editDrink);
            }}
          />
        </ItemFooter>

        <ItemExpanded className={editDrink ? "show" : ""}>
          {editDrink && (
            <form onSubmit={editDrinkHandler}>
              <Input
                type="text"
                name="drinkName"
                id="drinkName"
                placeholder="Drink Name"
                onChange={(e) =>
                  props.setDrink({ ...props.drink, drinkName: e.target.value })
                }
                value={props.drink.drinkName}
              />
              <Input
                type="text"
                name="available"
                id="available"
                placeholder="Available"
                onChange={(e) =>
                  props.setDrink({ ...props.drink, available: e.target.value })
                }
                value={props.drink.available}
              />
              <Input
                type="text"
                name="price"
                id="price"
                placeholder="Price"
                onChange={(e) =>
                  props.setDrink({ ...props.drink, price: e.target.value })
                }
                value={props.drink.price}
              />
              <Input
                type="text"
                name="volume"
                id="volume"
                placeholder="Volume"
                onChange={(e) =>
                  props.setDrink({ ...props.drink, volume: e.target.value })
                }
                value={props.drink.volume}
              />
              <Input type="file" name="image" id={`image_${props.drink.id}`} />
              <ActionWrapper>
                <Button className="submit" value="Submit" type="submit" />
                <Button
                  className="delete"
                  value="Delete"
                  type="reset"
                  onClick={deleteButton}
                />
              </ActionWrapper>
            </form>
          )}
        </ItemExpanded>
      </ItemWrapper>
    </Fragment>
  );
}

export default DrinkListItem;
