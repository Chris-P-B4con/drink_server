import React, { Fragment } from "react";

import DrinkCards from "../../components/DrinkCards/DrinkCards";
import NavBar from "../../components/NavBar/NavBar";

import Cookies from "js-cookie";

import { Main } from "./HomeStyles.js";
import Barplot from "../../components/Barplot/Barplot";

function Home() {
  const sessionCookie = Cookies.get("Session");

  return (
    <Fragment>
      <NavBar />
      <Main>
        <Barplot />
        <DrinkCards />
      </Main>
    </Fragment>
  );
}

export default Home;
