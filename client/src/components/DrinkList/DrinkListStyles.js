import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  justify-content: space-between;
  background-color: var(--dark-3);
  border-radius: 8px;
  border: 1px solid var(--dark-5);
  margin: 5px 8px;
  box-shadow: var(--shadow-elevation-medium);
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px 0px 0px 8px;
  margin-right: 8px;
`;

export const ItemBody = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 10px;
`;

export const Title = styled.p`
  display: flex;
  flex-wrap: wrap;
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
