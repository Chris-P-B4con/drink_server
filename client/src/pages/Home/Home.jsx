import React, { Fragment } from "react";

//Components
import Barplot from "../../components/Barplot/Barplot";
import DrinkCards from "../../components/DrinkCards/DrinkCards";
import NavBar from "../../components/NavBar/NavBar";

//Styled Components
import { Main } from "./HomeStyles.js";

function Home() {

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
