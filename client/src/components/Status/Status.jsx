import React from "react";

//Styled Components
import { Wrapper } from "./StatusStyles";

function Status({ status }) {
  let color = "";
  if (status.error) color = "accent";
  else if (status.success) color = "success";

  return (
    <Wrapper show={status.error || status.success} color={color}>
      {status.error ? status.error : status.success}
    </Wrapper>
  );
}

export default Status;
