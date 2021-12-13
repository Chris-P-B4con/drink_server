import styled from "styled-components";
import { CardWrapper } from "../Card/CardStyles";

export const Wrapper = styled(CardWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  background-color: var(--cur-status);
  border-radius: 10px;

  &.shown{
    opacity: 0.8;
    transition: all 500ms ease-in;
    max-height: 30px;
    margin-bottom:5px;
  }
  &.hidden {
    opacity: 0;
    transition: all 500ms ease-out;
    max-height: 0px;
  }

`;
