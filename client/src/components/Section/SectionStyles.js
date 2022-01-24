import styled from "styled-components";

export const SectionWrapper = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: var(--shadow-elevation-medium);
  width: 95%;
  padding: 10px 3px;
  margin: 3rem 0;
  background-color: ${({ theme }) => theme.section};
`;
