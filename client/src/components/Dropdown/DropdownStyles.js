import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  transition: all 200ms ease-in-out;
  display: flex;
  justify-content: space-between;
  transition: all 500ms ease-in-out;

  align-items: center;
  width: 150px;
  &.inactive {
    width: 0px;
  }
`;

export const MenuWrapper = styled.div``;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  color: var(--text-color);
  transition: all 200ms ease-in-out;
  padding: 5px;
  margin-left: 10px;

`;

export const Line = styled.hr`
  border: 1px var(--dark-3) solid;
  width: 100%;
`;