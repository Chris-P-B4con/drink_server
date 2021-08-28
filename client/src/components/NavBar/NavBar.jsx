import React from "react";
import "./NavBarStyle.css";
import { useCookies, CookiesProvider } from "react-cookie";

import { FiLogOut } from "react-icons/fi";
import { BiUser } from "react-icons/bi";

function NavBar() {
  const [cookies, setCookie, removeCookie] = useCookies(["session"]);
  function Logout() {
    removeCookie("session", {
      path: "/",
    });
    console.log("removed cookie");
    window.location.reload();
  }

  return (
    <header>
      <div className="header__img"></div>

      <div className="">
        <a href="#" className="neon-button">
          Wingman
        </a>
      </div>

      <div className="header__right">
        <div className="header__menu">
          <BiUser className="header__menu-logos" />
          <FiLogOut className="header__menu-logos" onClick={Logout} />
        </div>
      </div>
    </header>
  );
}

export default NavBar;
