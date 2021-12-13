import React, {useEffect} from 'react'
import { useCookies } from "react-cookie";
import { Navigate } from 'react-router';


function Logout() {
    const [cookies, setCookie, removeCookie] = useCookies(["session"]);

  function logout() {
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

  useEffect(() => {
      logout()

  }, [])
    return (
        <Navigate to="/login"/>
    )
}

export default Logout
