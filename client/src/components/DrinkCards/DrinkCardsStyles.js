import styled from "styled-components";

export const AccentLine = styled.div`
  border: solid 2px var(--accent);
  width: 100%;
`

export const Article = styled.article`
  display: flex;
  border-radius: 5px;
  margin: 5px;
  background-color: ${({theme})=> theme.article};
  flex-direction: column;
  min-height: 200px;
  box-shadow: var(--shadow-elevation-medium);
  transition: all 500 ease-in-out;
  width: 150px;
  position: relative;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      width: 200px;
      z-index:400;
      margin-left: -20px;
      margin-right: -20px;
      margin-top: -20px;
      margin-bottom: -20px;
      border: 1px solid ${({theme})=> theme.accent};
      transition: all 500ms ease-in-out;
    }
  }
`;

export const CardHeader = styled.div`
  width: 100%;
  height: 100%;
`;

export const CardBody = styled.div`
  color: ${({theme})=> theme.text};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 8px;
  height: 60px;

  h2 {
    background-color: transparent;
    font-size: 16px;
    text-decoration: none;
    display: flex;
    justify-content: center;
  }
`;

export const Button = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 5px 5px 0 0;
`;
