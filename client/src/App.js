import React, { useState } from "react";
import { useCookies } from "react-cookie";
import "./App.css";

import DrinkCards from "./components/DrinkCards/DrinkCards.jsx";
import LoginForm from "./components/LoginForm/LoginForm.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

function App() {
  const [user, setUser] = useState({ username: "", email: "" });
  const [status, setStatus] = useState({ error: "", success: "" });
  const [cookies, setCookie] = useCookies(["session"]);

  const Login = (details) => {
    fetch("http://localhost:5000/api/users/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((response) => response.json())
      .then((data) => {
        data.length > 0
          ? setUser({ username: data[0].username })
          : setUser({ username: "" });
      });
  };

  const Register = (details) => {
    fetch("http://localhost:5000/api/users/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        data.status === 403
          ? setStatus({ error: data.error, success: data.success })
          : setStatus({ success: data.success, error: data.error });
      });
  };

  // HTML Portion
  return (
    <>
      {user.username !== "" ? (
        <div className="dark">
          <NavBar />
          <DrinkCards />
        </div>
      ) : (
        // THIS IS LOGIN/REGISTER PAGE
        <div className="wrapper_center dark">
          <LoginForm Login={Login} Register={Register} status={status} />
        </div>
      )}
    </>
  );
}
export default App;
