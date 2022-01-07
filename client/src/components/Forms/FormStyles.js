import styled, { css } from "styled-components";

export const Action = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Input = styled.input`
  position: relative;
  width: 100%;
  padding: 10px 10px;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  outline: none;
`;

export const ActionWrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    .modal {
      width: 40rem;
      left: calc((100% - 40rem) / 2);
    }
  }
`;
export const Button = styled.input`
  width: 40%;
  padding: 10px 15px;
  margin: 0.5rem;
  border: none;
  outline: none;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.5);
  ${({ type }) => {
    if (type === "submit") {
      return css`
        background-color: ${({ theme }) => theme.accent};
        color: ${({ theme }) => theme.text};
      `;
    } else if (type === "delete") {
      return css`
        background-color: ${({ theme }) => theme.danger};
        color: ${({ theme }) => theme.text};
      `;
    } else if (type === "cancel") {
      return css`
        background-color: ${({ theme }) => theme.article};
        color: ${({ theme }) => theme.text};
      `;
    }
  }}
`;

export const Password = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

export const PasswordIcon = styled.i`
  position: absolute;
  top: 10px;
  right: 5px;
  color: ${({ theme }) => theme.text};
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
