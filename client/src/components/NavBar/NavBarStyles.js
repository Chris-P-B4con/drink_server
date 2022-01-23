import styled from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  width: 0;
  overflow: hidden;
  transition: all 500ms ease-in-out;

  ${(props) => {
    if (props.show) return `width: 150px;`;
  }}
`;

export const Header = styled.header`
  padding-top: 1rem;
  height: 6rem;
  width: 100%;
  position: fixed;
  top:0;
  z-index: 9999;
  background-color: ${({theme})=> theme.body};
`;

export const Nav = styled.nav`
  height: var(--nav-size);
  padding: 0 1rem;
  border-bottom: ${({theme})=> theme.borderColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Menu = styled.ul`

  padding: 0;
  margin: 0;
  text-align: center;
  max-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MenuItem = styled.li`
  display: flex;
  padding: 0;
  margin: 0 16px;
  font-size: 2rem;
`;

export const NeonSign = styled.div`
  font-size: 2rem;
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  color: ${({theme})=> theme.accent};
  border: ${({theme})=> theme.accent} 0.125em solid;
  padding: 0.25em 1em;
  border-radius: 0.25em;
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;
  box-shadow: inset 0 0 0.5em 0 ${({theme})=> theme.accent}, 0 0 0.5em 0 ${({theme})=> theme.accent};
  position: relative;

  &::after{
    content: ${props=> props.item};
  }
  /* &::before {
    pointer-events: none;
    content: "";
    position: absolute;
    background: var(--accent);
    top: 120%;
    left: 0;
    width: 100%;
    height: 100%;
    transform: perspective(1em) rotateX(40deg) scale(1, 0.35);
    filter: blur(1em);
    opacity: 0.7;
    z-index: 1;
  } */

  &:hover,
  &:focus {
    color: ${({theme})=> theme.article};
    text-shadow: none;
    background-color: ${({theme})=> theme.accent};
    box-shadow: inset 0 0 1.5em 0 ${({theme})=> theme.accent}, 0 0 1.5em 0 ${({theme})=> theme.accent};
  }
  &:hover::before {
    opacity: 1;
  }
  &:hover::after {
    opacity: 1;
  }
`;
