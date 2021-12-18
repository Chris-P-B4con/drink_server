import React from "react";

import { Wrapper } from "./TagStyles";

function Tag(props) {
    const types = {
        newType: "--accent",
        soldOut: "--redType",
    }
  return <Wrapper style={{"--type": types[props.type] }}>{props.children}</Wrapper>;
}

export default Tag;
