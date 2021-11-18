import React from "react";

function UpdateDrink (props) {
  return (
    <div className="form-inner">
      <input
        type="text"
        name="drinkName"
        id="drinkName"
        placeholder="Drink Name"
        onChange={(e) =>
          props.setNewDrink({ ...props.newDrink, drinkName: e.target.value })
        }
        value={props.newDrink.drinkName}
      />
      <input
        type="text"
        name="available"
        id="available"
        placeholder="Available"
        onChange={(e) =>
          props.setNewDrink({ ...props.newDrink, available: e.target.value })
        }
        value={props.newDrink.available}
      />
      <input
        type="text"
        name="price"
        id="price"
        placeholder="Price"
        onChange={(e) =>
          props.setNewDrink({ ...props.newDrink, price: e.target.value })
        }
        value={props.newDrink.price}
      />
      <input
        type="text"
        name="volume"
        id="volume"
        placeholder="Volume"
        onChange={(e) =>
          props.setNewDrink({ ...props.newDrink, volume: e.target.value })
        }
        value={props.newDrink.volume}
      />
      <input type="file" name="image" id="image" />
      <div className="modal__actions">
        <input className="submit" type="submit" value="Submit" />
        <input className="cancel" onClick={props.deleteButton} value="Delete" />
      </div>
    </div>
  );
}

export default UpdateDrink;
