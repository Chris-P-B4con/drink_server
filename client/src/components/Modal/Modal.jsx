import React from "react";
import "@reach/dialog/styles.css";

//Styled Components
import {
  Button,
  MyDialog,
  ModalWrapper,
  ModalContent,
  ModalHeader,
  ModalActions,
} from "./ModalStyles";

import "./ModalAnimations.css";

const Modal = (props) => {

  return (
    <MyDialog isOpen={props.showDialog} onDismiss={props.toggleModal} aria-label="Add Drink">
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
                    button.toLowerCase() === "cancel"
                      ? props.cancelAction
                      : undefined
                  }
                  readOnly
                />
              );
            })}
        </ModalActions>
      </ModalWrapper>
    </MyDialog>
  );
};

export default Modal;
