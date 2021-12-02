import styled from "styled-components";

export const Header = styled.header`
  align-self: flex-start;
  /* box-shadow: 0px 3px 18px 2px rgba(0, 0, 0, 0.4); */
  padding-top: 1rem;
  height: 6rem;
  margin-bottom: 3.5rem;
  width: 100%;
  height: fit-content;
`;

export const Nav = styled.nav`
  height: var(--nav-size);
  background-color: var(--dark-1);
  padding: 0 1rem;
  border-bottom: var(--border);

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
  background-color: var(--dark-1);
  text-decoration: none;
  color: var(--accent);
  border: var(--accent) 0.125em solid;
  padding: 0.25em 1em;
  border-radius: 0.25em;
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em currentColor;
  box-shadow: inset 0 0 0.5em 0 var(--accent), 0 0 0.5em 0 var(--accent);
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
    color: var(--dark-1);
    text-shadow: none;
    background-color: var(--accent);
    box-shadow: inset 0 0 1.5em 0 var(--accent), 0 0 1.5em 0 var(--accent);
  }
  &:hover::before {
    opacity: 1;
  }
  &:hover::after {
    opacity: 1;
  }
`;
