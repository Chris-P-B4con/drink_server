import React from "react";
import { BarPlot, LinePlot, Label, Radio, RadioGroup } from "./BarplotStyles";

function PlotPicker(props) {
  return (
    <RadioGroup>
      <Label htmlFor="barplot">
        <Radio
          id="barplot"
          name="plotType"
          type="radio"
          value="barplot"
          onClick={(event) => props.setSelectPlot(event.target.value)}
        />
        <BarPlot color={props.selectPlot === "barplot" ? "accent" : "text"} />
      </Label>
      <Label htmlFor="lineplot">
        <Radio
          type="radio"
          value="lineplot"
          name="plotType"
          id="lineplot"
          onClick={(event) => props.setSelectPlot(event.target.value)}
        />
        <LinePlot color={props.selectPlot === "lineplot" ? "accent" : "text"} />
      </Label>
    </RadioGroup>
  );
}

export default PlotPicker;
