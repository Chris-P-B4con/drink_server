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

  return (
    <Header>
      <Nav>
        <NavItem link="#" icon={<NeonSign>Wingman</NeonSign>}>
          <Dropdown />
        </NavItem>
      </Nav>
    </Header>
  );
}

export default NavBar;
