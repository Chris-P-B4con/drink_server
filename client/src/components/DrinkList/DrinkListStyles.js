import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RightSection = styled.div`
  align-self: flex-end;
  padding: 10px;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
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

export const ItemWrapper = styled.article`
  display: flex;
  color: ${({ theme }) => theme.text};
  width: 350px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.article};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  margin: 5px 8px;
  box-shadow: var(--shadow-elevation-medium);
  transition: all 500ms ease-in-out;
  align-items: space-between;
  ${(props) => {
    if (props.show)
      return `
    flex-direction: column;
    justify-content: center;
    align-items: center;`;
  }}
`;

export const Image = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  border-radius: 8px 0px 0px 8px;
  margin-right: 8px;
  transition: all 500ms ease-in-out;

  ${(props) => {
    if (props.show)
      return `
    border-radius: 8px;
    overflow: hidden;`;
  }}
`;

export const ItemBody = styled.div`
  display: flex;
  background-color: transparent;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
  transition: all 500ms ease-in-out;
  padding: 10px;
  ${(props) => {
    if (props.show)
      return `overflow: hidden;
    height: 0px;
    padding: 0px;`;
  }}
`;

export const Title = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  font-weight: bold;
  background-color: transparent;
`;

export const ItemFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: all 500ms ease-in-out;
  margin-left: auto;
  ${(props) => {
    if (props.show)
      return `
    align-self: flex-end;`;
  }}
`;
export const Span = styled.span`
  margin-right: 6px;
`;

export const AddSection = styled.section`
  align-self: center;
  padding: 10px;
  cursor: pointer;
  font-size: 1.5rem;
`;

export const ItemExpanded = styled.div`
  height: 0px;
  transition: all 500ms ease-in-out;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(props) => {
    if (props.show)
      return `
    overflow: auto;
    height: 500px;`;
  }}
`;
