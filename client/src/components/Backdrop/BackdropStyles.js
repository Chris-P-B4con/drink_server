import styled from "styled-components";

export const BackdropWrapper = styled.div`
  background: black;
  z-index: 5;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transition: opacity 1s ease-out;
  opacity: 0.5;
`;
