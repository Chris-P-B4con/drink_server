import React, { Fragment } from "react";

//Components
import DrinkList from "../../components/DrinkList/DrinkList";
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
        <DrinkList />
        <UserDrinks />
      </Main>
    </Fragment>
  );
}

export default Profile;
