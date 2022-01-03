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
  color: var(--text-color);
  cursor: pointer;
`;

export const ItemWrapper = styled.article`
  display: flex;
  color: var(--text-color);
  width: 350px;
  justify-content: space-between;
  background-color: var(--bg2);
  border-radius: 8px;
  border: 1px solid var(--bg3);
  margin: 5px 8px;
  box-shadow: var(--shadow-elevation-medium);
  transition: all 500ms ease-in-out;
  align-items: space-between;
  &.show {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Image = styled.img`
  width: ${props => props.width};
  height: ${props => props.width};
  border-radius: 8px 0px 0px 8px;
  margin-right: 8px;
  transition: all 500ms ease-in-out;

  &.show{
    border-radius: 8px;
  }
`;

export const ItemBody = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-direction: column;
  transition: all 500ms ease-in-out;
  padding: 10px;

  &.show {
    overflow: hidden;
    height: 0px;
    padding: 0px;
  }
`;

export const Title = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 1.3rem;
  font-weight: bold;
`;

export const ItemFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  color: var(--text-color);
  cursor: pointer;
  transition: all 500ms ease-in-out;
  margin-left: auto;
  &.show {
    align-self: flex-end;
  }
`;
export const Span = styled.span`
  margin-right: 6px;
`;

export const AddSection = styled.section`
  align-self: center;
  padding: 10px;
  cursor: pointer;
  font-size: 1.5rem;
  color: var(--text-color);
`;

export const ItemExpanded = styled.div`
  height: 0px;
  transition: all 500ms ease-in-out;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &.show {
    overflow: auto;
    height: 500px;
  }
`;
