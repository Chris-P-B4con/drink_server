import React from "react";
import DrinkList from "../../components/DrinkList/DrinkList";
import NavBar from "../../components/NavBar/NavBar";

import { Main } from "../Home/HomeStyles"

function Admin() {
  return (
    <>
      <NavBar />
      <Main>

      <DrinkList />
      </Main>
    </>
  );
}

export default Admin;
