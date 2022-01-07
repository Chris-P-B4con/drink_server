import React, { useState } from "react";
import useMediaQuery from "react-responsive";

import { Wrapper } from "./StatusStyles";
import { COLORS_LIGHT, COLORS_DARK } from "../../constants/constants";

function Status({ status }) {
  const [isDark, setIsDark] = useState(true);
  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (isSystemDark) => setIsDark(isSystemDark)
  );

  let color = "";
  status.error
    ? (color = isDark ? COLORS_DARK.accent : COLORS_LIGHT.accent)
    : (color = "");
  status.success
    ? (color = isDark ? COLORS_DARK.success : COLORS_LIGHT.success)
    : (color = color);

  return (
    <Wrapper
      className={status.error || status.success ? "shown" : "hidden"}
      style={{ "--cur-status": color }}
    >
      {status.error ? status.error : status.success}
    </Wrapper>
  );
}

export default Status;
