import React, { useState, useEffect, Fragment } from "react";
import Cookies from "js-cookie";

import Status from "../Status/Status";
import CanvasJSReact from "../../lib/canvasjs.react";
import Reload from "../Reload/Reload";

import { updateStatus } from "../../lib/helpFunctions";
import { COLORS_LIGHT, COLORS_DARK } from "../../constants/constants";
import { getAllUserDrinks } from "../../lib/drinkFunctions";

import { Wrapper } from "./BarplotStyles";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Barplot(props) {
  const [options, setOptions] = useState({ data: [] });
  const [status, setStatus ] = useState({succes:"", error: ""})
  
  useEffect(() => {
    const isDark = Cookies.get("theme")==="dark";

    (async () => {
      const allUserDrinks = await getAllUserDrinks();
      if (allUserDrinks.length > 0) {

        const userVolumes = allUserDrinks.reduce((acc, userDrink) => {
          const { username } = userDrink.user;
          const { volume } = userDrink.drink;
          const newVolume = acc[username] ? acc[username] + volume : volume;
          return { ...acc, [username]: newVolume };
        }, {});

        setOptions({
          backgroundColor: isDark ? COLORS_DARK.body : COLORS_LIGHT.body,
          animationEnabled: true,
          theme: "transparent",
          title: {
            fontColor: isDark ? COLORS_DARK.text : COLORS_LIGHT.text,
            text: "Bestenliste",
          },
          axisX: {
            tickThickness: 0,
            title: "Benutzer",
            titleFontColor: isDark
              ? COLORS_DARK.text
              : COLORS_LIGHT.text,
            labelFontColor: isDark
              ? COLORS_DARK.text
              : COLORS_LIGHT.text,
          },
          axisY: {
            gridDashType: "dot",
            tickThickness: 0,
            titleFontColor: isDark
              ? COLORS_DARK.text
              : COLORS_LIGHT.text,
            title: "Trinkvolumen",
            labelFontColor: isDark
              ? COLORS_DARK.text
              : COLORS_LIGHT.text,
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
