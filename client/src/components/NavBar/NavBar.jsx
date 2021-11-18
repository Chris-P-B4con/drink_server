import React from "react";
import "./NavBarStyle.css";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { BiUser } from "react-icons/bi";

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
    <header>
      <div className="header__left">
        <Link to={"/admin"}>
          <BiUser className="header__menu-logos" />
        </Link>
      </div>

      <div className="header__center">
        <Link to={"/"} className="neon-button">
          Wingman
        </Link>
      </div>

      <div className="header__right">
        <FiLogOut className="header__menu-logos" onClick={Logout} />
      </div>
    </header>
  );
}

export default NavBar;
