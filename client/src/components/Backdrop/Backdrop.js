import React from "react";
import ReactDOM from "react-dom";

import { BackdropWrapper } from "./BackdropStyles";

const Backdrop = (props) =>
  ReactDOM.createPortal(
    <BackdropWrapper
      className={["backdrop", props.open ? "open" : ""].join(" ")}
      onClick={props.onClick}
    />,
    document.getElementById("backdrop-root")
  );

export default Backdrop;
