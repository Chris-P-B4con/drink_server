import React from "react";
import ReactDOM from "react-dom";

import { Button } from "../Forms/FormStyles";
import {
  ModalWrapper,
  ModalContent,
  ModalHeader,
  ModalActions,
} from "./ModalStyles";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <ModalWrapper onSubmit={props.formHandler}>
      <ModalHeader>
        <h1>{props.title}</h1>
      </ModalHeader>
      <ModalContent>{props.children}</ModalContent>
      <ModalActions>
        {props.actions &&
          props.actions.map((button, index) => {
            return (
              <Button
                className={button.toLowerCase()}
                value={button}
                type={button.toLowerCase() === "submit" ? "submit" : "reset"}
                onClick={
                  button.toLowerCase() == "cancel" ? props.cancelAction : ""
                }
              />
            );
          })}
      </ModalActions>
    </ModalWrapper>,
    document.getElementById("modal-root")
  );
};

export default Modal;
