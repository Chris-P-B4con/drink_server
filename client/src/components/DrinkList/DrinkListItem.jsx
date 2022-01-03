import React, { Fragment, useEffect, useState } from "react";

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

import { updateDrink } from "../../lib/drinkFunctions";
import { responseHandler, updateStatus } from "../../lib/helpFunctions";

function DrinkListItem(props) {
  const [status, setStatus] = useState({ success: "", error: "" });
  const [updatedDrink, setUpdatedDrink] = useState(props.drink);

  const deleteButton = async (e) => {
    try {
      const res = await fetch(`/drinks/delete/${props.drink.id}`, {
        method: "POST",
      });
      const message = await responseHandler(res);
      if (message.error === "") props.showEdit(props.index)
      updateStatus(setStatus, message);
    } catch (err) {
      console.log(err);
    }
  };

  const editDrinkHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", updatedDrink.id);
    formData.append("drinkName", updatedDrink.drinkName);
    formData.append("available", updatedDrink.available);
    formData.append("price", updatedDrink.price);
    formData.append("volume", updatedDrink.volume);
    formData.append(
      "file",
      document.querySelector('input[type="file"]').files[0]
    );
    
    (async () => {
      const statusMessage = await updateDrink(formData);
      updateStatus(setStatus, statusMessage);
      setTimeout(() => {
        props.getDrinkHandler();
      }, 2000);
    })();
  };

  useEffect(() => {
    setUpdatedDrink(props.drink)
  }, [props.drink])
  return (
    <Fragment>
      <Status status={status} />
      <ItemWrapper className={props.editDrink ? "show" : ""}>
        <Image className={props.editDrink ? "show" : ""} src={updatedDrink.image} width="125px"/>
        <ItemBody className={props.editDrink ? "show" : ""}>
          <Title>{updatedDrink.drinkName}</Title>
          <p>Available: {updatedDrink.available}</p>
        </ItemBody>
        <ItemFooter className={props.editDrink ? "show" : ""}>
          <MdOutlineModeEdit
            id={updatedDrink.id}
            onClick={() => {
              props.showEdit(props.index);
            }}
          />
        </ItemFooter>

        <ItemExpanded className={props.editDrink ? "show" : ""}>
          {props.editDrink && (
            <form onSubmit={editDrinkHandler}>
              <Input
                type="text"
                name="drinkName"
                id="drinkName"
                placeholder="Drink Name"
                onChange={(e) =>
                  setUpdatedDrink({
                    ...updatedDrink,
                    drinkName: e.target.value,
                  })
                }
                value={updatedDrink.drinkName}
              />
              <Input
                type="text"
                name="available"
                id="available"
                placeholder="Available"
                onChange={(e) =>
                  setUpdatedDrink({
                    ...updatedDrink,
                    available: e.target.value,
                  })
                }
                value={updatedDrink.available}
              />
              <Input
                type="text"
                name="price"
                id="price"
                placeholder="Price"
                onChange={(e) =>
                  setUpdatedDrink({ ...updatedDrink, price: e.target.value })
                }
                value={updatedDrink.price}
              />
              <Input
                type="text"
                name="volume"
                id="volume"
                placeholder="Volume"
                onChange={(e) =>
                  setUpdatedDrink({ ...updatedDrink, volume: e.target.value })
                }
                value={updatedDrink.volume}
              />
              <Input
                type="file"
                name="image"
                id={`image_${updatedDrink.id}`}
                onChange={(e) =>
                  setUpdatedDrink({ ...updatedDrink, image: e.target.value })
                }
              />
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
