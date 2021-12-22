import React, { Fragment, useState, useEffect } from "react";

import Reload from "../Reload/Reload";
import Backdrop from "../Backdrop/Backdrop";
import Modal from "../Modal/Modal";
import DrinkListItem from "./DrinkListItem";
import Status from "../Status/Status";

import { MdAddCircleOutline } from "react-icons/md";

import { Input } from "../Forms/FormStyles";
import { AddSection, Wrapper } from "./DrinkListStyles";

import { getDrinks, addDrink } from "../../lib/drinkFunctions";
import { updateStatus } from "../../lib/helpFunctions";

function DrinkList() {
  const [status, setStatus] = useState({ error: "", success: "" });
  const [modalStatus, setModalStatus] = useState(false);
  const [spin, setSpin] = useState(true);
  const [drinks, setDrinks] = useState([
    {
      drinkName: "",
      available: "",
      volume: "",
      price: "",
      image: null,
    },
  ]);
  const [newDrink, setNewDrink] = useState([
    {
      drinkName: "",
      available: "",
      volume: "",
      price: "",
      image: null,
    },
  ]);

  const getDrinkHandler = async (e) => {
    setSpin(true);
    let res = await getDrinks();
    if (res.length > 0) {
      res.sort((a, b) => (a.drinkName > b.drinkName ? 1 : -1));
      setDrinks(res);
    } else {
      updateStatus(setStatus, res);
    }
    setTimeout(() => {
      setSpin(false);
    }, 1000);
  };

  const showModal = (e) => {
    setModalStatus(!modalStatus);
  };

  const editDrinkHandler = async (e) => {
    e.preventDefault();
    const drink = e.currentTarget.id;
    const statusMessage = await addDrink(drink);
    updateStatus(setStatus, statusMessage);
  };

  const addDrinkHandler = (e) => {
    e.preventDefault();
    showModal();
    const formData = new FormData();
    if (!newDrink.drinkName) {
      updateStatus(setStatus, {
        error: "Please enter a drink name.",
        succes: "",
      });
    } else if (!newDrink.available) {
      updateStatus(setStatus, {
        error: "Please fill out the available field.",
        succes: "",
      });
    } else if (!newDrink.price) {
      updateStatus(setStatus, {
        error: "Please fill out the price field.",
        succes: "",
      });
    } else if (!newDrink.volume) {
      updateStatus(setStatus, {
        error: "Please fill out the volume field.",
        succes: "",
      });
    } else {
      formData.append("drinkName", newDrink.drinkName);
      formData.append("available", newDrink.available);
      formData.append("price", newDrink.price);
      formData.append("volume", newDrink.volume);
      formData.append(
        "file",
        document.querySelector('input[type="file"]').files[0]
      );
      (async () => {
        const statusMessage = await addDrink(formData);
        updateStatus(setStatus, statusMessage);
        setTimeout(() => {
          getDrinkHandler();
        }, 2000);
      })();
    }
  };

  useEffect(() => {
    setSpin(true);
    getDrinkHandler();
  }, []);

  return (
    <Wrapper>
      <h2>Getränke Editieren</h2>
      <br />
      <Reload
        spin={spin}
        alignment="flex-end"
        reloadHandler={getDrinkHandler}
      />
      <Status status={status} setStatus={setStatus} />
      {drinks[0].drinkName &&
        drinks.map((drink, index) => {
          return (
            <DrinkListItem
              drink={drink}
              updateDrink={editDrinkHandler}
              getDrinkHandler={getDrinkHandler}
            />
          );
        })}
      <AddSection>
        <MdAddCircleOutline onClick={showModal} />
      </AddSection>

      {modalStatus ? (
        <Fragment>
          <Backdrop onClick={showModal} />
          <Modal
            title="Add Drink"
            actions={["Submit", "Cancel"]}
            type="form"
            formHandler={addDrinkHandler}
            cancelAction={showModal}
          >
            <Input
              type="text"
              name="drinkName"
              id="drinkName"
              placeholder="Drink Name"
              onChange={(e) =>
                setNewDrink({ ...newDrink, drinkName: e.target.value })
              }
              value={newDrink.drinkName}
            />
            <Input
              type="text"
              name="available"
              id="available"
              placeholder="Available"
              onChange={(e) =>
                setNewDrink({ ...newDrink, available: e.target.value })
              }
              value={newDrink.available}
            />
            <Input
              type="text"
              name="price"
              id="price"
              placeholder="Price"
              onChange={(e) =>
                setNewDrink({ ...newDrink, price: e.target.value })
              }
              value={newDrink.price}
            />
            <Input
              type="text"
              name="volume"
              id="volume"
              placeholder="Volume"
              onChange={(e) =>
                setNewDrink({ ...newDrink, volume: e.target.value })
              }
              value={newDrink.volume}
            />
            <Input type="file" name="image" id="image" />
          </Modal>
        </Fragment>
      ) : null}
    </Wrapper>
  );
}

export default DrinkList;
