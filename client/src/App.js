import React, { Fragment, useState } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { GlobalStyles, MasterWrapper } from "./constants/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { COLORS_DARK, COLORS_LIGHT } from "./constants/constants";
import Cookies from "js-cookie";

//Components
import Logout from "./pages/Logout/Logout";
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
    setTheme(Cookies.get("theme"))
  }, []);
  const sessionCookie = Cookies.get("Session");
  const [theme, setTheme] = useState("dark");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    Cookies.get("theme") ==="light"? Cookies.set("theme", "dark") : Cookies.set("theme", "light")
  };

  return (
    <ThemeProvider theme={theme === "light" ? COLORS_LIGHT : COLORS_DARK}>
      <MasterWrapper>
        <BrowserRouter>
          <Routes>
            {sessionCookie ? (
              <Fragment>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/profile" element={<Profile theme={theme} themeToggler={themeToggler}/>} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/login" element={<Navigate to="/" />} />
              </Fragment>
            ) : (
              <Fragment>
                <Route path="/*" element={<Navigate to="/login" />} />
                <Route path="/login" element={<LoginRegister />} />
              </Fragment>
            )}
          </Routes>

          <GlobalStyles />
        </BrowserRouter>
      </MasterWrapper>
    </ThemeProvider>
  );
}

export default App;
