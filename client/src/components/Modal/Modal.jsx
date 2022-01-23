import React from "react";
import ReactDOM from "react-dom";

//Styled Components
import {
  Button,
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
                type={button.toLowerCase()}
                onClick={
                  button.toLowerCase() === "cancel" ? props.cancelAction : undefined
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
