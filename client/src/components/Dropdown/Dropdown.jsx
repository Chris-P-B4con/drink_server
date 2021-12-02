import React from "react";

import DropdownItem from "./DropdownItem/DropdownItem";

import { BiUser } from "react-icons/bi";
import { RiAdminLine } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";

import { Line, Wrapper } from "./DropdownStyles";

function Dropdown(props) {
  return (
    <>
      <DropdownItem link="/profile">
        <span>
          <BiUser />
        </span>
      </DropdownItem>
      <DropdownItem link="/admin">
        <span>
          <RiAdminLine />
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
