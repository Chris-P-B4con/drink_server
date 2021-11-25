import styled from "styled-components";
import { FiLogOut } from "react-icons/fi";
import { BiUser } from "react-icons/bi";

export const Header = styled.header`
  align-self: flex-start;
  /* box-shadow: 0px 3px 18px 2px rgba(0, 0, 0, 0.4); */
  padding-top: 1rem;
  height: 6rem;
  margin-bottom: 3.5rem;
  width: 100%;
  margin-bottom: auto;
`;

export const Menu = styled.ul`
  padding: 0;
  margin: 0;
  text-align: center;
`;

export const MenuItem = styled.li`
  display: inline-block;
  padding: 0;
  margin: 0 16px;
  font-size: 2rem;
  color: white;
`;

export const ProfileIcon = styled(BiUser)`
  cursor: pointer;
  color: white;
`;

export const LogoutIcon = styled(FiLogOut)`
  cursor: pointer;
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

  &::before {
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
  }

  &:hover,
  &:focus {
    color: var(--dark-1);
    text-shadow: none;
    background-color: var(--accent);
    box-shadow: inset 0 0 1.5em 0 var(--accent), 0 0 1.5em 0 var(--accent);
  }
  &:hover::before{
    opacity: 1;
  }
  &:hover::after{
    opacity: 1;
  }
`;
