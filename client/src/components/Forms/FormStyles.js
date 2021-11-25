import styled from "styled-components";

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
  border-bottom: 1px solid #fff;
  background-color: transparent;
  color: white;
  outline: none;
`;

export const Button = styled.input`
  width: 40%;
  padding: 10px 0;
  margin: 0.5rem;
  border: none;
  outline: none;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.5);

  &.submit {
    background-color: var(--accent);
    color: white;
  }

  &.cancel {
    background-color: var(--dark-4);
    color: white;
  }
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
  color: white;
`;

export const LoginButton = styled.button`
  font-size: 1em;
  margin-right: 1em;
  border: 0px;
  cursor: pointer;
  color: #fff;
  border: none;
  background-color: transparent;
`;
