import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.text};
  font-size: 2rem;
  display: flex;
  transition: 500ms linear;
  ${({ theme }) => {
    if (theme.text === "white") {
      return `transform: rotate(180deg); justify-content: flex-start;`;
    } else {
      return `transform: rotate(0deg); justify-content: flex-end;`;
    }
  }}
`;
