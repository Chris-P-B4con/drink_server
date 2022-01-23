import React from "react";
import { Link } from "react-router-dom";

//Styled Components
import { MenuItem, ItemWrapper } from "./NavBarStyles";

function NavItem(props) {

  return (
    <MenuItem>
      <Link to={props.link} onClick={() => props.setOpenNav(!props.openNav)}>
        {props.icon}
      </Link>
      <ItemWrapper show={props.openNav} >{props.children}</ItemWrapper>
    </MenuItem>
  );
}

export default NavItem;
