import React, { useState } from "react";
import useMediaQuery from "react-responsive";
import { Wrapper } from "./TagStyles";

import { COLORS_LIGHT, COLORS_DARK } from "../../constants/constants";

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
