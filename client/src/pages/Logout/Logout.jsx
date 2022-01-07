import React, { useEffect } from "react";
import { Navigate } from "react-router";
import Cookies from "js-cookie";

function Logout() {
  useEffect(() => {
    function logout() {
      fetch("/users/logout", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }).then(() => {
        Cookies.remove("Session");
        window.location.reload(true);
      });
    }
    logout();
  }, []);

  return <Navigate to="/login" />;
}

export default Logout;
