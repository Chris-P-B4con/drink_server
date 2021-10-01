import { useState, React } from "react";
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

  const get_drinks = async () => {
    setSpin(true);
    await fetch("http://localhost:5000/api/drinks/get", {
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
    setTimeout(() => {
      setSpin(false);
    }, 1000);
  };

  return (
    <div className="drinks_table_wrapper">
      <div className="reload">
        <AiOutlineReload
          onClick={get_drinks}
          spin={spin}
          className={spin ? "refresh-start" : ""}
        />
      </div>
      <Table drinks={drinks} />
    </div>
  );
}

export default DrinkList;
