import React from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

import { Header, Menu, MenuItem, ProfileIcon, NeonSign, LogoutIcon } from "./NavBarStyles";

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
      <Menu>
        <MenuItem>
          <Link to={"/admin"}>
            <ProfileIcon />
          </Link>
        </MenuItem>

        <MenuItem>
          <Link to={"/"}>
            <NeonSign>Wingman</NeonSign>
          </Link>
        </MenuItem>

        <MenuItem>
          <LogoutIcon onClick={Logout} />
        </MenuItem>
      </Menu>
    </Header>
  );
}

export default NavBar;
