import React from "react";
import { Link } from "react-router-dom";

import { ItemWrapper } from "../DropdownStyles";

function DropdownItem(props) {
  return (
    <ItemWrapper>
      <Link to={props.link}>{props.children}</Link>
    </ItemWrapper>
  );
}

export default DropdownItem;
