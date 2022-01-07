import React, { useState } from "react";
import useMediaQuery from "react-responsive";
import { Wrapper } from "./TagStyles";

import { COLORS_LIGHT, COLORS_DARK } from "../../constants/constants";

function Tag(props) {
  const [isDark, setIsDark] = useState(true);
  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (isSystemDark) => setIsDark(isSystemDark)
  );
  
  const types = {
    new: isDark ? COLORS_DARK.accent : COLORS_LIGHT.accent,
    unavailable: isDark ? COLORS_DARK.danger : COLORS_LIGHT.danger,
  };
  return (
    <Wrapper style={{ "--type": types[props.type] }}>{props.children}</Wrapper>
  );
}

export default Tag;
