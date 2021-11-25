import styled from "styled-components";

export const CardWrapper = styled.div`
  box-shadow: 0px 3px 18px 10px rgba(0, 0, 0, 0.5);
  /* box-shadow: 0px 5px 8px rgba(0,0,0,0.5); */
  border-radius: 10px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 150px;
  color: white;
  width: 105%;
  box-shadow: 0px 3px 18px 10px rgba(0, 0, 0, 0.5);
  background-image: linear-gradient(
    to bottom left,
    var(--dark-2),
    var(--dark-4)
  );
  border-radius: 16px 16px ;
  margin-left: -10px;
  margin-right: -10px;
  margin-bottom: -5px;
`;

export const CardBody = styled(CardWrapper)`
  padding: 30px;
  border-radius: 0 0 16px 16px;
  background-color: var(--dark-2);
  overflow: hidden;
  height: 100%;
  &.active {
    transition: height 500ms linear, padding 500ms linear, opacity 500ms linear;

    height: var(--height);
    padding: 30px;
  }
  &.inactive {
    transition: height 500ms linear, padding 500ms linear, opacity 500ms linear, display 500ms linear;
    padding: 0;
    height: 0px;}
`;
export const CardFooter = styled.div`

`
export const CardInner = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  position: relative;
  /* background-color: var(--secondary); */
  border-radius: 16px;
`;
