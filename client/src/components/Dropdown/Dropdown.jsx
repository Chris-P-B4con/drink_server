import React from "react";

//Components
import DropdownItem from "./DropdownItem/DropdownItem";

//React icons
import { BiUser, BiHomeAlt } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";

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
