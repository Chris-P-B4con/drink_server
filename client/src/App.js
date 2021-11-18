import React, { useState } from "react";
import "./App.css";
import dotenv from "dotenv";
import Cookies from 'js-cookie';
import LoginRegisterCard from "./components/LoginRegisterCard/LoginRegisterCard.jsx";
import { BrowserRouter as Router,Routes, Route,} from 'react-router-dom';
import Admin from "./components/Admin/Admin";
import Home from "./components/Home/Home";
dotenv.config();

function App() {
  const [user, setUser] = useState({ userId: "" });
  const sessionCookie = Cookies.get("Session")

  // HTML Portion
  return (
    <Router>
      {sessionCookie ? (
        <div className="wrapper_center dark">

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/admin" element={<Admin/>} />
          </Routes>
        </div>
      ) : (
        // THIS IS LOGIN/REGISTER PAGE
        <div className="wrapper_center dark">
          <LoginRegisterCard  setUser={setUser}/>
        </div>
      )}
    </Router>
  );
}
export default App;
