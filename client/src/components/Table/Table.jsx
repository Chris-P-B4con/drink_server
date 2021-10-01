import React, { useState } from "react";
import "./TableStyle.css";
import Status from "../Status/Status";
import InputTable from "../TableInput/TableInput";

function Table({ drinks, getDrinks }) {
  const [status, setStatus] = useState({ error: "", success: "" });

  const inputMap = {
    drink_name: "text",
    id: "number",
    available: "number",
    volume: "number",
    price: "number",
  };
  const [newDrink, setNewDrink] = useState([
    {
      drink_name: "",
      available: "",
      volume: "",
      price: "",
    },
  ]);

  const updateDrinks = (e) => {
    e.preventDefault();

    // Check that he fields contain the correct type of info

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
      });
    getDrinks();
  };
  const keys = Object.keys(drinks[0]);
  return (
    <form id="drinkForm" onSubmit={updateDrinks}>
      <Status status={status} />
      <table className="drinks_table">
        <thead>
          <tr>
            {keys.map((key, i) => {
              return (
                <th>
                  {(key.charAt(0).toUpperCase() + key.slice(1)).replace(
                    "_",
                    " "
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {drinks.map((drink, index) => {
            return (
              <tr>
                {keys.map((key, i) => {
                  return <th>{drink[key]}</th>;
                })}
              </tr>
            );
          })}
          <InputTable
            data={drinks}
            newData={newDrink}
            setNewData={setNewDrink}
            inputMap={inputMap}
          />
        </tbody>
      </table>
    </form>
  );
}

export default Table;