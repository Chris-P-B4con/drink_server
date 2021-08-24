import React, { useState } from "react";
import { useCookies } from "react-cookie";
import "./App.css";

import DrinkCards from "./components/DrinkCards";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";

function App() {
  const [user, setUser] = useState({ username: "", email: "" });
  const [error, setError] = useState("");
  const [cookies, setCookie] = useCookies(["session"]);

  const admin = {
    email: "admin@admin.com",
    username: "admin",
    password: "root",
  };
  const Login = (details) => {
    console.log(details);
    if (details.email === admin.email && details.password === admin.password) {
      setUser({ username: "admin" });
      setCookie("session", "admin", {
        path: "/",
      });
      //window.location.reload()
    } else {
      console.log("Something is wrong");
    }
  };

  const Register = (details) => {
    console.log(details);
  };

  // HTML Portion
  return (
    <>
      {cookies.session !== undefined ? (
        <div className="dark">
          <NavBar />
          <DrinkCards />
        </div>
      ) : (
        // THIS IS LOGIN/REGISTER PAGE
        <div className="wrapper_center dark">
          <LoginForm Login={Login} Register={Register} error={error} />
        </div>
      )}
    </>
  );
}
export default App;
