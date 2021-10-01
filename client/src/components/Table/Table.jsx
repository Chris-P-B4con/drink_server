import React from "react";
import "./TableStyle.css";
import { RiSendPlane2Fill } from "react-icons/ri";

function Table({ drinks }) {
  const updateDrinks = (e) => {
    e.preventDefault();
    console.log("updating");
  };
  const keys = Object.keys(drinks[0]);
  return (
    <form id="drinkForm" onSubmit={updateDrinks}>
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
                      <input type="text" id={key} />
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
