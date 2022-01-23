import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

//Components
import CanvasJSReact from "../../lib/canvasjs.react";
import PlotPicker from "./PlotPicker";
import Reload from "../Reload/Reload";
import Status from "../Status/Status";

//Styled Components
import { Wrapper, PlotWrapper } from "./BarplotStyles";

//Custom Functions
import { updateStatus } from "../../lib/helpFunctions";
import { COLORS_LIGHT, COLORS_DARK } from "../../constants/constants";
import { getAllUserDrinks } from "../../lib/drinkFunctions";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Barplot(props) {
  const [options, setOptions] = useState({ data: [] });
  const [selectPlot, setSelectPlot] = useState("lineplot");
  const [status, setStatus] = useState({ succes: "", error: "" });

  useEffect(() => {
    const isDark = Cookies.get("theme") === "dark";
    if (selectPlot === "lineplot") {
      (async () => {
        const allUserDrinks = await getAllUserDrinks();
        if (allUserDrinks.length > 0) {
          const userVolumes = allUserDrinks.reduce((acc, userDrink) => {
            const { username } = userDrink.user;
            const { volume } = userDrink.drink;
            const date = new Date(userDrink.orderedAt);
            const oneJan = new Date(date.getFullYear(), 0, 1);
            const numberOfDays = Math.floor(
              (date - oneJan) / (24 * 60 * 60 * 1000)
            );
            const week = Math.ceil((date.getDay() + 1 + numberOfDays) / 7);
            const newVolume = acc[username][String(oneJan)+String(week)] ? acc[username][String(oneJan)+String(week)] + volume : volume;
            return { ...acc, [username]: {[String(oneJan)+String(week)]: newVolume }};
          }, {});
          // console.log(userVolumes)
          // setOptions({
          //   backgroundColor: isDark ? COLORS_DARK.body : COLORS_LIGHT.body,
          //   animationEnabled: true,
          //   theme: "transparent",
          //   title: {
          //     fontColor: isDark ? COLORS_DARK.text : COLORS_LIGHT.text,
          //     text: "Bestenliste",
          //   },
          //   axisX: {
          //     tickThickness: 0,
          //     title: "Benutzer",
          //     titleFontColor: isDark ? COLORS_DARK.text : COLORS_LIGHT.text,
          //     labelFontColor: isDark ? COLORS_DARK.text : COLORS_LIGHT.text,
          //   },
          //   axisY: {
          //     gridDashType: "dot",
          //     tickThickness: 0,
          //     titleFontColor: isDark ? COLORS_DARK.text : COLORS_LIGHT.text,
          //     title: "Trinkvolumen",
          //     labelFontColor: isDark ? COLORS_DARK.text : COLORS_LIGHT.text,
          //   },
          //   data: [
          //     {
          //       type: "column",
          //       dataPoints: Object.entries(userVolumes).map(
          //         ([username, volume]) => {
          //           return {
          //             label: username,
          //             y: volume,
          //           };
          //         }
          //       ),
          //     },
          //   ],
          // });
        } else {
          updateStatus(setStatus, allUserDrinks);
        }
      })();
    } else if (selectPlot === "barplot") {
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
              titleFontColor: isDark ? COLORS_DARK.text : COLORS_LIGHT.text,
              labelFontColor: isDark ? COLORS_DARK.text : COLORS_LIGHT.text,
            },
            axisY: {
              gridDashType: "dot",
              tickThickness: 0,
              titleFontColor: isDark ? COLORS_DARK.text : COLORS_LIGHT.text,
              title: "Trinkvolumen",
              labelFontColor: isDark ? COLORS_DARK.text : COLORS_LIGHT.text,
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
        } else {
          updateStatus(setStatus, allUserDrinks);
        }
      })();
    } else {
      updateStatus(setStatus, { success: "", error: "Unknown plot choice." });
    }
  }, [selectPlot]);

  return (
    <Wrapper>
      <Status status={status} />
      <PlotPicker selectPlot={selectPlot} setSelectPlot={setSelectPlot} />
      <PlotWrapper>
        {options.data.length > 0 ? (
          <CanvasJSChart options={options} />
        ) : (
          <Reload spin={true}/>
        )}
      </PlotWrapper>
    </Wrapper>
  );
}

export default Barplot;
