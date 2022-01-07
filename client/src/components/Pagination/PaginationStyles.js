import styled from "styled-components";

import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

export const LeftArrow = styled(AiOutlineArrowLeft)`
  align-self: flex-start;
  font-size: 1.5rem;
  color: ${(props) => (props.color ? props.color : props.theme.text)};
  cursor: ${(props) => (props.color ? "default" : "pointer")};
`;

export const RightArrow = styled(AiOutlineArrowRight)`
  align-self: flex-end;
  font-size: 1.5rem;
  color: ${(props) => (props.color ? props.color : props.theme.text)};
  cursor: ${(props) => (props.color ? "default" : "pointer")};
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
`;
