import styled, { css } from "styled-components";
import { Dialog } from "@reach/dialog";

export const MyDialog = styled(Dialog)`
  background-color: ${({ theme }) => theme.section};
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  flex-direction: column;
`;

export const ModalWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &h1 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.accent};
    margin: 1rem;
    align-self: flex-start;
    margin-bottom: auto;
  }
`;

export const ModalContent = styled.div`
  padding: 2rem;
  width: 100%;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: center;
`;
export const ModalActions = styled.div`
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
