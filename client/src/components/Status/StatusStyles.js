import styled from "styled-components";
import { CardWrapper } from "../Card/CardStyles";

export const Wrapper = styled(CardWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  height:30px;
  color: black;
  background-color: var(--cur-status);
  border-radius: 10px;

  &.shown{
    opacity: 0.8;
    transition: all 500ms ease-in;
    flex-basis: 100%;
    min-height: 30px;
    margin-bottom:5px;
  }
  &.hidden {
    opacity: 0;
    transition: all 500ms ease-out;
    flex-basis: 100%;
    height: 0px;
  }

`;
