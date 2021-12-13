import React from "react";

import { ReloadWrapper } from "./ReloadStyles";

import { AiOutlineReload } from "react-icons/ai";

function Reload(props) {
  return (
    <ReloadWrapper
      style={{ "--alignment": props.alignment }}
      className={props.spin ? "refresh-start" : "refresh-end"}
      onClick={props.reloadHandler}
    >
      <AiOutlineReload />
    </ReloadWrapper>
  );
}

export default Reload;
