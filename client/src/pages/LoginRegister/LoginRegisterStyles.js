import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--dark-1);
  min-width: 400px;
  min-height:650px;
  display: flex;
  flex-direction: column;
  
  @media(max-width: 800px){
    min-width: 80%;
    top:60px;
    position: absolute;
  }
`;

