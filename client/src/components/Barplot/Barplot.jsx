import React, { useState, useEffect, Fragment } from "react";
import ResizableBox from "../ResizableBox/ResizableBox";
import { AxisOptions, Chart } from "react-charts";
import Reload from "../Reload/Reload";
import { getAllUserDrinks } from "../../lib/drinkFunctions";
import { useMediaQuery } from 'react-responsive';
import { Wrapper } from "./BarplotStyles";

function Barplot(props) {
  const [plotData, setPlotData] = useState([]);
  const [isDark, setIsDark] = useState(true)
  const primaryAxis = React.useMemo(
    () => ({
      getValue: (datum) => datum.primary,
    }),
    []
  );

  const secondaryAxes = React.useMemo(
    () => [
      {
        getValue: (datum) => datum.secondary,
      },
    ],
    []
  );

  useEffect(() => {
    (async () => {
      const serverMessage = await getAllUserDrinks();
      if (serverMessage[0].drink) {
        const data = {};
        for (let entry of serverMessage) {
          let username = entry.user.username;
          if (data[username]) data[username] += entry.drink.volume;
          else data[username] = entry.drink.volume;
        }
        setPlotData(
          Object.keys(data).map((el, i) => {
            return {
              label: el,
              data: [{ primary: "Benutzer", secondary: data[el] }],
            };
          })
        );
      }
    })();
  }, []);

  const systemPrefersDark = useMediaQuery(
    {
      query: '(prefers-color-scheme: dark)',
    },
    undefined,
    (isSystemDark) => setIsDark(isSystemDark)
  );

  return (
    <Fragment>
      <h2>Bestenliste</h2>
      <br />
      <Wrapper>
        {plotData.length > 0 ? (
          <Chart
            options={{
              data: plotData,
              primaryAxis,
              secondaryAxes,
              dark: isDark,
            }}
          />
        ) : (
          <Reload />
        )}
      </Wrapper>
    </Fragment>
  );
}

export default Barplot;
