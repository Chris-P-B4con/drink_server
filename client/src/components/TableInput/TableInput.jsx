import React from "react";
import { RiSendPlane2Fill } from "react-icons/ri";
function InputTable({ data, newData, setNewData, inputMap }) {
  const keys = Object.keys(data[0]);

  return (
    <tr className="input">
      {keys.map((key, i) => {
        return (
          <th>
            <input
              type={inputMap[key]}
              id={key}
              step={key === "volume" || key === "price" ? "0.01" : ""}
              onChange={(e) =>
                setNewData({ ...newData, [key]: e.target.value })
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
}

export default InputTable;
