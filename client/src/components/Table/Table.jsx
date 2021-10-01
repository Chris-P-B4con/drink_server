import React, { useState } from "react";
import "./TableStyle.css";
import Status from "../Status/Status";
import { RiSendPlane2Fill } from "react-icons/ri";

function Table({ drinks }) {
  const [status, setStatus] = useState({ error: "", success: "" });

  const input_map = {
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

    fetch("http://localhost:5000/api/drinks/add", {
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
          {drinks.map((drink, index) => {
            return (
              <tr>
                {keys.map((key, i) => {
                  return (
                    <th>
                      <input
                        type={input_map[key]}
                        id={key}
                        step={key === "volume" || key === "price" ? "0.01" : ""}
                        onChange={(e) =>
                          setNewDrink({ ...newDrink, [key]: e.target.value })
                        }
                      />
                    </th>
                  );
                })}
                <th>
                  <button type="submit">
                    <RiSendPlane2Fill />
                  </button>
                </th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </form>
  );
}

export default Table;
