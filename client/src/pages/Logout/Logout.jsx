import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router";

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
