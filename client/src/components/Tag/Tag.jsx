import React from "react";

//Styled Components
import { Wrapper } from "./TagStyles";

function Tag(props) {
  
  const types = {
    new: "accent",
    unavailable: "danger",
  };
  return (
    <Wrapper type={types[props.type]}>{props.children}</Wrapper>
  );
}

export default Tag;
