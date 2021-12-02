import React, { useState } from "react";
import { useCookies } from "react-cookie";

import Dropdown from "../Dropdown/Dropdown";
import NavItem from "./NavItem/NavItem";

import { Header, Menu, Nav, NeonSign } from "./NavBarStyles";

function NavBar() {
  const [cookies, setCookie, removeCookie] = useCookies(["session"]);
  function Logout() {
    fetch("/users/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => {
      removeCookie("Session", {
        path: "/",
      });
      window.location.reload(true);
    });
  }
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
