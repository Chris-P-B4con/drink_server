import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: auto;
  flex-wrap: wrap;

  h2{
    color: white;
    text-decoration: underline;
  }
`;

export const Article = styled.article`
  display: flex;
  border-radius: 5px;
  margin: 5px;
  background-color: var(--dark-3);
  flex-direction: column;
  min-height: 200px;
  box-shadow: 0px 3px 18px 10px rgba(0, 0, 0, 0.5);
`;

export const CardHeader = styled.div`
  width: 150px;
  height: 150px;
  padding: 3px;
`;

export const CardBody = styled.div`
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 8px;

  h2 {
    font-size: 16px;
    text-decoration: none;
  }
`;

export const Button = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 5px 5px 0 0;
`;
