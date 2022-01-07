import React, { Fragment } from "react";

import NavBar from "../../components/NavBar/NavBar";
import UserDrinks from "../../components/UserDrinks/UserDrinks";
import ThemeToggler from "../../components/ThemeToggler/ThemeToggler";

import { Main } from "../Home/HomeStyles";

function Profile(props) {
  return (
    <Fragment>
      <NavBar />
      <Main>
        <ThemeToggler theme={props.theme} themeToggler={props.themeToggler}/>
        <UserDrinks />
      </Main>
    </Fragment>
  );
}

export default Profile;
