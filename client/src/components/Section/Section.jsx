import React from "react";

import { SectionWrapper } from "./SectionStyles";
function Section(props) {
  return <SectionWrapper>{props.children}</SectionWrapper>;
}

export default Section;
