import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  box-shadow: var(--shadow-elevation-high);
  padding: 10px 3px;
`;

export const Article = styled.article`
  display: flex;
  border-radius: 5px;
  margin: 5px;
  background-color: var(--bg2);
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
      border: 1px solid var(--accent);
      transition: all 500ms ease-in-out;
    }
  }
`;

export const CardHeader = styled.div`
  width: 100%;
  height: 100%;
  padding: 3px;
`;

export const CardBody = styled.div`
  color: var(--text-color);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 8px;
  height: 60px;

  h2 {
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
