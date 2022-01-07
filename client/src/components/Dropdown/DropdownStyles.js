import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  transition: all 200ms ease-in-out;
  display: flex;
  justify-content: space-between;
  transition: all 500ms ease-in-out;

  align-items: center;
  width: 0px;
  ${(props) => {
    if (props.show) return `width: 150px;`;
  }}
`;

export const MenuWrapper = styled.div``;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  color: ${({ theme }) => theme.text};
  transition: all 200ms ease-in-out;
  padding: 5px;
  margin-left: 10px;
`;

export const Line = styled.hr`
  border: 1px ${({ theme }) => theme.article}; solid;
  width: 100%;
`;
