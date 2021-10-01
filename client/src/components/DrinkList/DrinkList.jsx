import { useState, useEffect, React } from "react";
import "./DrinkListStyle.css";
import { AiOutlineReload } from "react-icons/ai";
import Table from "../Table/Table";

function DrinkList() {
  const [drinks, setDrinks] = useState([
    {
      id: "",
      drink_name: "",
      available: "",
      volume: "",
      price: "",
    },
  ]);

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
        setDrinks(JSON.parse(JSON.stringify(data)));
      });
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
      <Table drinks={drinks} getDrinks={getDrinks} />
    </div>
  );
}

export default DrinkList;
