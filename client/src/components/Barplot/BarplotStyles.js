import styled from "styled-components";
import { VscGraphLine, VscGraph } from "react-icons/vsc";

export const LinePlot = styled(VscGraphLine)`
  color: ${({ theme, color }) => theme[color]};
`;
export const BarPlot = styled(VscGraph)`
  color: ${({ theme, color }) => theme[color]};
`;

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-shadow: var(--shadow-elevation-medium);
  width: 95%;
  padding: 10px 3px;
  margin: 3rem 0;
  background-color: ${({ theme }) => theme.section};
`;

export const PlotWrapper = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.section};
  padding: 10px;
  width: 95%;
  height: 400px;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  position: relative;
  font-size: 2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;

export const Radio = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
  width: 2rem;
  height: 2rem;
`;

export const RadioGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: baseline;
  padding: 5px;
  width: 45%;
`;
