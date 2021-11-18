import React from "react";
import "./TableStyle.css";
import TableInput from "../TableInput/TableInput";

function Table(props) {
  const keys = Object.keys(props.data[0]);
  return (
    <table className="drinks_table">
      <thead>
        <tr>
          {keys.map((key, i) => {
            if (key !== "image") {
              return (
                <th key={key}>
                  {(key.charAt(0).toUpperCase() + key.slice(1)).replace(
                    "_",
                    " "
                  )}
                </th>
              );
            } else {
              return "";
            }
          })}
        </tr>
      </thead>
      <tbody>
        {props.data.map((sample, index) => {
          return (
            <tr key={index}>
              {keys.map((key, i) => {
                if (key !== "image") {
                  return <th key={key}>{sample[key]}</th>;
                } else {
                  return ""
                }
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
