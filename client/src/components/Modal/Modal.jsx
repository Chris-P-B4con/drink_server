import React from "react";
import ReactDOM from "react-dom";
import "./ModalStyles.css";

import Card from "../Card/Card";

const modal = (props) => {
  return ReactDOM.createPortal(
    <Card className="card__modal">
      <div className="modal__header">
        <h1>{props.title}</h1>
      </div>
      <div className="modal__body">{props.children}</div>
    </Card>,
    document.getElementById("modal-root")
  );
};

export default modal;
