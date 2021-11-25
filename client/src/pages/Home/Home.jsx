import React, { Fragment } from "react";

import DrinkCards from "../../components/DrinkCards/DrinkCards";
import NavBar from "../../components/NavBar/NavBar";

import Cookies from "js-cookie";

import { Main } from "./HomeStyles.js";

function Home() {
  const sessionCookie = Cookies.get("Session");

  return (
    <Fragment>
      <NavBar />
      <Main>
        <DrinkCards />
      </Main>
    </Fragment>
  );
}

export default Home;
