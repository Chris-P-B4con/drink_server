import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 0 0 16px 16px;
  height: 600px;
  position: absolute;
  @media (max-width: 800px) {
    min-width: 80%;
    top: 60px;
    position: absolute;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100px;
  min-width: 420px;
  max-width: 420px;
  color: ${({ theme }) => theme.text};

  
  background-image: linear-gradient(
    to bottom left,
    ${({ theme }) => theme.body},
    ${({ theme }) => theme.article}
  );
  border-radius: 16px 16px;
  margin-left: -10px;
  margin-right: -10px;
  margin-bottom: -5px;
`;

export const CardBody = styled.div`
  border-radius: 0 0 16px 16px;
  width: 400px;
  box-shadow: var(--shadow-elevation-medium);
  background-color: ${({theme})=> theme.section};
  overflow: hidden;
  transition: all 500ms ease-in-out;
  height: ${({show}) => show ? `400px` : `0px`};

`;

export const CardHider = styled.div`
  padding: 30px;
`;

export const LoginButton = styled.button`
  font-size: 1em;
  margin-right: 1em;
  border: 0px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  border: none;
  background-color: transparent;
`;
