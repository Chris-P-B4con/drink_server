import styled, { css } from "styled-components";
import { CardWrapper } from "../Card/CardStyles";

export const Wrapper = styled(CardWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  color: ${({theme})=> theme.text};
  background-color: ${({color,theme})=> theme[color]};
  border-radius: 10px;
  transition: all 500ms ease-in-out;
  padding: 6px 10px;
  width: 100%;

  opacity: 0;
  max-height: 0px;
  ${({ show }) => {
    if (show)
      return css`
        opacity: 0.8;
        max-height: 30px;
        margin-bottom: 5px;
      `;
  }}
`;
