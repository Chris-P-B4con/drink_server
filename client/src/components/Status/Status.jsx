import React from "react";

import { Wrapper } from "./StatusStyles";
import { COLORS } from "../../constants";


function Status({ status }) {
  let color = "";
  console.log(status)
  status.error ? (color = COLORS.accent) : (color = "");
  status.success ? (color = COLORS.success) : (color = color);
  return (
    <Wrapper
      className={status.error || status.success ? "shown" : "hidden"}
      style={{ "--cur-status": color }}
    >
      {status.error ? status.error : status.success}
    </Wrapper>
  );
}

export default Status;
