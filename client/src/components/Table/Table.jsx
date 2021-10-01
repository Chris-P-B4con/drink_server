import React from "react";
import "./TableStyle.css";
import TableInput from "../TableInput/TableInput";

function Table(props) {
  console.log(props.data);
  const keys = Object.keys(props.data[0]);
  return (
    <table className="drinks_table">
      <thead>
        <tr>
          {keys.map((key, i) => {
            return (
              <th>
                {(key.charAt(0).toUpperCase() + key.slice(1)).replace("_", " ")}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {props.data.map((sample, index) => {
          return (
            <tr>
              {keys.map((key, i) => {
                return <th>{sample[key]}</th>;
              })}
            </tr>
          );
        })}
        {props.inputs ? (
          <TableInput
            data={props.data}
            newData={props.newData}
            setNewData={props.setNewData}
            inputMap={props.inputMap}
          />
        ) : (
          ""
        )}
      </tbody>
    </table>
  );
}

export default Table;
