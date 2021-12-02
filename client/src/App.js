import React, { Fragment, useState } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { GlobalStyles, MasterWrapper } from "./GlobalStyles";
import dotenv from "dotenv";
import Cookies from "js-cookie";

//Components
import Home from "./pages/Home/Home";
import LoginRegister from "./pages/LoginRegister/LoginRegister";
import Admin from "./pages/Admin/Admin";
import Profile from "./pages/Profile/Profile";
function App() {
  React.useEffect(() => {
    document.documentElement.style.setProperty(
      "--scrollbar-width",
      window.innerWidth - document.documentElement.clientWidth + "px"
    );
  }, []);
  const [user, setUser] = useState({ userId: "" });
  const sessionCookie = Cookies.get("Session");

  return (
    <MasterWrapper>
      <BrowserRouter>
        <Routes>
          {sessionCookie ? (
            <Fragment>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/profile" element={<Profile />} />
            </Fragment>
          ) : (
            <Route path="/" element={<LoginRegister setUser={setUser} />} />
          )}
        </Routes>

        <GlobalStyles />
      </BrowserRouter>
    </MasterWrapper>
  );
}

export default App;
