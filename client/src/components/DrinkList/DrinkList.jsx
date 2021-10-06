import { useState, useEffect, React } from "react";
import "./DrinkListStyle.css";
import { AiOutlineReload } from "react-icons/ai";
import Table from "../Table/Table";
import Status from "../Status/Status";

function DrinkList() {
  const [status, setStatus] = useState({ error: "", success: "" });
  const [drinks, setDrinks] = useState([
    {
      id: "",
      drink_name: "",
      available: "",
      volume: "",
      price: "",
    },
  ]);
  const [newDrink, setNewDrink] = useState([
    {
      drink_name: "",
      available: "",
      volume: "",
      price: "",
    },
  ]);
  const inputMap = {
    drink_name: "text",
    id: "number",
    available: "number",
    volume: "number",
    price: "number",
  };
  const [spin, setSpin] = useState(false);
  const reloadSpin = () => {
    setSpin(true);
    getDrinks();
    setTimeout(() => {
      setSpin(false);
    }, 1000);
  };
  const getDrinks = () => {
    fetch(`${process.env.REACT_APP_IP_BACKEND}:5000/api/drinks/get`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (JSON.parse(JSON.stringify(data)).length !== 0)
          setDrinks(JSON.parse(JSON.stringify(data)));
      });
  };
  const updateDrinks = (e) => {
    // Check that he fields contain the correct type of info
    e.preventDefault();
    fetch(`${process.env.REACT_APP_IP_BACKEND}:5000/api/drinks/add`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDrink),
    })
      .then((response) => response.json())
      .then((data) => {
        setStatus({ error: data.error, success: data.success });
        setTimeout(() => setStatus({ error: "", succes: "" }), 5000);
      });

    if (status.error === "") {
      setNewDrink({ drink_name: "", available: "", volume: "", price: "" });
      getDrinks();
    }
  };
  useEffect(() => {
    setSpin(true);
    getDrinks();
    setTimeout(() => {
      setSpin(false);
    }, 1000);
  }, []);

  return (
    <div className="drinks_table_wrapper">
      <div className="reload">
        <AiOutlineReload
          onClick={reloadSpin}
          spin={spin}
          className={spin ? "refresh-start" : ""}
        />
      </div>
      <form id="drinkForm" onSubmit={updateDrinks}>
        <Status status={status} />
        <Table
          data={drinks}
          inputMap={inputMap}
          newData={newDrink}
          updateData={updateDrinks}
          setNewData={setNewDrink}
          inputs={true}
        />
      </form>
    </div>
  );
}

export default DrinkList;
