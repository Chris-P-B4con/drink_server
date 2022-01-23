import React, { useState } from "react";

//Components
import Dropdown from "../Dropdown/Dropdown";
import NavItem from "./NavItem";

//Styled Components
import { Header, Menu, Nav, NeonSign } from "./NavBarStyles";

function NavBar() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <Header>
      <Nav>
        <Menu>
          <NavItem
            link="#"
            icon={<NeonSign>Wingman</NeonSign>}
            openNav={openNav}
            setOpenNav={setOpenNav}
          >
            <Dropdown />
          </NavItem>
        </Menu>
      </Nav>
    </Header>
  );
}

export default NavBar;
