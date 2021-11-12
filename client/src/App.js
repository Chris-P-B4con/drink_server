import React, { useState } from "react";
import "./App.css";
import dotenv from "dotenv";
import Cookies from 'js-cookie';
import DrinkCards from "./components/DrinkCards/DrinkCards.jsx";
import DrinkList from "./components/DrinkList/DrinkList.jsx";
import LoginForm from "./components/LoginRegisterCard/LoginRegisterCard.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import LoginRegisterCard from "./components/LoginRegisterCard/LoginRegisterCard.jsx";
dotenv.config();

function App() {
  const [user, setUser] = useState({ userId: "" });
  const sessionCookie = Cookies.get("Session")
  // HTML Portion
  return (
    <>
      {sessionCookie ? (
        <div className="wrapper_center dark">
          <NavBar />
          <DrinkList />
        </div>
      ) : (
        // THIS IS LOGIN/REGISTER PAGE
        <div className="wrapper_center dark">
          <LoginRegisterCard  setUser={setUser}/>
        </div>
      )}
    </>
  );
}
export default App;
