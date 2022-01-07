import React, { useState } from "react";

//Components
import Dropdown from "../Dropdown/Dropdown";
import NavItem from "./NavItem/NavItem";

//Styled Components
import { Header, Nav, NeonSign } from "./NavBarStyles";

function NavBar() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <Header>
      <Nav>
        <NavItem
          link="#"
          icon={<NeonSign item={openNav ? "x" : ">"}>Wingman</NeonSign>}
          openNav={openNav}
          setOpenNav={setOpenNav}
        >
          <Dropdown />
        </NavItem>
      </Nav>
    </Header>
  );
}

export default NavBar;
