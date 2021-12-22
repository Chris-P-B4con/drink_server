import React from "react";

import { Wrapper } from "./TagStyles";
import { COLORS } from "../../constants/constants";

function Tag(props) {
    const types = {
        new: COLORS.accent,
        unavailable: COLORS.danger,
    }
  return <Wrapper style={{"--type": types[props.type] }}>{props.children}</Wrapper>;
}

export default Tag;
