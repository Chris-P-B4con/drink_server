import styled from "styled-components";

export const Wrapper = styled.div`
background-color: var(--type);
color: ${({theme})=> theme.article};
border-radius: 8px 15px 15px 0;
min-width: 50px;
max-height: 30px;
padding: 3px 6px;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
top:0;
left:0;
border: 4px solid ${({theme})=> theme.article};
`