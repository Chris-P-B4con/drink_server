import React, { useState } from "react";
import { MenuItem } from "../NavBarStyles";
import { Link } from "react-router-dom";

import { Wrapper } from "../../Dropdown/DropdownStyles";
function NavItem(props) {
  const [openNav, setOpenNav] = useState(false);

  return (
    <MenuItem>
      <Link to={props.link} onClick={() => setOpenNav(!openNav)}>
        {props.icon}
      </Link>
      <Wrapper className={openNav ? "" : "inactive"}>{props.children}</Wrapper>
    </MenuItem>
  );
}

export default NavItem;
