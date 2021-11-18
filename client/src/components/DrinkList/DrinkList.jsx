import { useState, useEffect, React, Fragment } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";
import drinkFunctions from "../../lib/drinkFunctions";

import UpdateDrink from "./UpdateDrink/UpdateDrink";
import Drink from "./Drink/Drink";
import Status from "../Status/Status";
import Modal from "../Modal/Modal";
import Backdrop from "../Backdrop/Backdrop";

import "./DrinkListStyle.css";
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

  const getDrinkHandler = (e) => {
    setSpin(true);

    drinkFunctions.getDrinks(catchError, setDrinks);
    setTimeout(() => {
      setSpin(false);
    }, 1000);
  };
  const showModal = (e) => {
    setModalStatus(!modalStatus);
  };
  const addDrinkHandler = (e) => {
    e.preventDefault();
    showModal()
    const formData = new FormData();
    formData.append("drinkName", newDrink.drinkName);
    formData.append("available", newDrink.available);
    formData.append("price", newDrink.price);
    formData.append("volume", newDrink.volume);
    formData.append(
      "file",
      document.querySelector('input[type="file"]').files[0]
    );
    drinkFunctions.addDrink(catchError, formData);
    drinkFunctions.getDrinks(catchError, setDrinks);
  };

  const catchError = (err, succ) => {
    if (succ) setStatus({ success: succ, error: "" });
    else if (err) setStatus({ success: "", error: err });
    setTimeout(() => {
      setStatus({ error: "", success: "" });
    }, 4000);
  };

  useEffect(() => {
    setSpin(true);
    getDrinkHandler(null);
    setTimeout(() => {
      setSpin(false);
    }, 1000);
  }, []);

  return (
    <div className="drinks__wrapper">
      <div className="reload">
        <AiOutlineReload
          onClick={getDrinkHandler}
          spin={spin}
          className={spin ? "refresh-start" : ""}
        />
      </div>
      <Status status={status} />
      {drinks.map((drink, index) => {
        return <Drink drink={drink} />;
      })}
      <div className="drink__add">
        <button onClick={showModal} id="addDrink">
          <IoMdAddCircleOutline />
        </button>
      </div>

      {modalStatus ? (
        <Fragment>
          <Backdrop onClick={showModal} />
          <Modal
            modalStatus={modalStatus}
            title="Add Drink"
            deleteButton={showModal}
          >
            <form onSubmit={addDrinkHandler}>
              <UpdateDrink
                newDrink={newDrink}
                setNewDrink={setNewDrink}
                deleteButton={showModal}
              />
            </form>
          </Modal>
        </Fragment>
      ) : null}
    </div>
  );
}

export default DrinkList;
