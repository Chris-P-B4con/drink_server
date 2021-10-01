import React, { useState } from "react";
import "./App.css";

import DrinkCards from "./components/DrinkCards/DrinkCards.jsx";
import DrinkList from "./components/DrinkList/DrinkList.jsx";
import LoginForm from "./components/LoginRegisterCard/LoginRegisterCard.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

function App() {
  const [user, setUser] = useState({ username: "", email: "" });

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
          {/* <LoginForm setUser={setUser} /> */}
          <DrinkList />
        </div>
      )}
    </>
  );
}
export default App;
