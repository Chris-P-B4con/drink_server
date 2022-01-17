import React from "react";
import { BarPlot, LinePlot, Label, Radio, RadioGroup } from "./BarplotStyles";

function PlotPicker(props) {
  return (
    <RadioGroup>
      <Label for="barplot">
        <Radio
          id="barplot"
          name="plotType"
          type="radio"
          class="barplot"
          value="barplot"
          onClick={event=> props.setSelectPlot(event.target.value)}
        />
        <BarPlot color={props.selectPlot==="barplot" ? "accent" : "text"} />
      </Label>
      <Label for="lineplot">
        <Radio
          type="radio"
          class="lineplot"
          value="lineplot"
          name="plotType"
          id="lineplot"
          onClick={event=> props.setSelectPlot(event.target.value)}
        />
        <LinePlot color={props.selectPlot==="lineplot" ? "accent" : "text"} />
      </Label>
    </RadioGroup>
  );
}

export default PlotPicker;
