import styled from "styled-components";

export const Wrapper = styled.div`
background-color: ${(props) => props.theme[props.type]};
color: ${({theme})=> theme.article};
border-radius: 8px 15px 15px 0;
min-width: 50px;
max-height: 30px;
padding: 3px 6px;
position: absolute;
display: flex;
justify-content: center;
align-items: center;
top:-1px;
left:-1px;
border: 3px solid ${({theme})=> theme.article};
`