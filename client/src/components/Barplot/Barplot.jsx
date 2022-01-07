import React, { useState, useEffect, Fragment } from "react";
import ResizableBox from "../ResizableBox/ResizableBox";
import { AxisOptions, Chart } from "react-charts";
import Reload from "../Reload/Reload";
import { getAllUserDrinks } from "../../lib/drinkFunctions";
import { useMediaQuery } from "react-responsive";
import { Wrapper } from "./BarplotStyles";
import CanvasJSReact from "../../lib/canvasjs.react";
import { COLORS_LIGHT, COLORS_DARK } from "../../constants/constants";
import { updateStatus } from "../../lib/helpFunctions";
import Status from "../Status/Status";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Barplot(props) {
  const [options, setOptions] = useState({ data: [] });
  const [status, setStatus ] = useState({succes:"", error: ""})
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    (async () => {
      const allUserDrinks = await getAllUserDrinks();
      if (allUserDrinks.length > 0) {
        const data = {};

        const userVolumes = allUserDrinks.reduce((acc, userDrink) => {
          const { username } = userDrink.user;
          const { volume } = userDrink.drink;
          const newVolume = acc[username] ? acc[username] + volume : volume;
          return { ...acc, [username]: newVolume };
        }, {});

        setOptions({
          backgroundColor: isDark ? COLORS_DARK.bg : COLORS_LIGHT.bg,
          animationEnabled: true,
          theme: "transparent",
          title: {
            fontColor: isDark ? COLORS_DARK.textColor : COLORS_LIGHT.textColor,
            text: "Bestenliste",
          },
          axisX: {
            tickThickness: 0,
            title: "Benutzer",
            titleFontColor: isDark
              ? COLORS_DARK.textColor
              : COLORS_LIGHT.textColor,
            labelFontColor: isDark
              ? COLORS_DARK.textColor
              : COLORS_LIGHT.textColor,
          },
          axisY: {
            gridDashType: "dot",
            tickThickness: 0,
            titleFontColor: isDark
              ? COLORS_DARK.textColor
              : COLORS_LIGHT.textColor,
            title: "Trinkvolumen",
            labelFontColor: isDark
              ? COLORS_DARK.textcolor
              : COLORS_LIGHT.textcolor,
          },
          data: [
            {
              type: "column",
              dataPoints: Object.entries(userVolumes).map(
                ([username, volume]) => {
                  return {
                    label: username,
                    y: volume,
                  };
                }
              ),
            },
          ],
        });
      } else{
        updateStatus(setStatus, allUserDrinks)
      }
    })();
  }, []);

  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined,
    (isSystemDark) => setIsDark(isSystemDark)
  );

  return (
    <Fragment>
      <Status status= {status}/>
      <Wrapper>
        {options.data.length > 0 ? (
          <CanvasJSChart options={options} />
        ) : (
          <Reload />
        )}
      </Wrapper>
    </Fragment>
  );
}

export default Barplot;
