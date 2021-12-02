import React from "react";

import DropdownItem from "./DropdownItem/DropdownItem";

import { BiUser, BiHomeAlt } from "react-icons/bi";
import { RiAdminLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";

import { Line, Wrapper } from "./DropdownStyles";

function Dropdown(props) {
  return (
    <>
      <DropdownItem link="/">
        <span>
          <BiHomeAlt />
        </span>
      </DropdownItem>
      <DropdownItem link="/profile">
        <span>
          <BiUser />
        </span>
      </DropdownItem>
      <DropdownItem link="/logout">
        <span>
          <FiLogOut />
        </span>
      </DropdownItem>
    </>
  );
}

export default Dropdown;
