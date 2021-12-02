import React, { useState } from "react";
import { MenuItem } from "../NavBarStyles";
import { Link } from "react-router-dom";

import { Wrapper } from "../../Dropdown/DropdownStyles";
function NavItem(props) {

  return (
    <MenuItem>
      <Link to={props.link} onClick={() => props.setOpenNav(!props.openNav)}>
        {props.icon}
      </Link>
      <Wrapper className={props.openNav ? "" : "inactive"}>{props.children}</Wrapper>
    </MenuItem>
  );
}

export default NavItem;
