import React, { Fragment } from "react";
import DrinkList from "../../components/DrinkList/DrinkList";
import NavBar from "../../components/NavBar/NavBar";

import { Main } from "../Home/HomeStyles";

function Admin() {
  return (
    <Fragment>
      <NavBar />
      <Main>
        <DrinkList />
      </Main>
    </Fragment>
  );
}

export default Admin;
