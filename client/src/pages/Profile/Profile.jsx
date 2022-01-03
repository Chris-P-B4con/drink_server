import React, { Fragment } from "react";

import NavBar from "../../components/NavBar/NavBar";
import UserDrinks from "../../components/UserDrinks/UserDrinks";
import { Main } from "../Home/HomeStyles";

function Profile() {
  return (
    <Fragment>
      <NavBar />
      <Main>
        <UserDrinks />
      </Main>
    </Fragment>
  );
}

export default Profile;
