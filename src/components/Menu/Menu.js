import styled from "styled-components";
import { theme } from "../../assets/styles/theme";
import { keyframes } from "styled-components";

const menuBubbleAnimation = keyframes`
  0% {
    border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%;
    transform: skew(3deg, 5deg);
  }
  34% {
    border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
  }
  67% {
    border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
  }
  100% {
    border-radius: 40% 60% 70% 30% / 40% 40% 60% 50%;
    transform: skew(-0.08turn, 5deg);
  }
`;
export const MenuContainer = styled.div`
  height: fit-content;
  width: fit-content;
  position: absolute;
  top: 0;
  right: 0;
`;
export const MenuItem = styled.p`
  position: absolute;
  top: 35%;
  left: 60%;
  font-size: ${theme.fontSizes.normal};
  font-family: "Gluten", sans-serif;
  text-align: center;
  color: ${theme.colors.white};
  transform: translate(-50%, -50%);
  cursor: pointer;
  z-index: 2;
`;
export const MenuBubble = styled.div`
  width: 10em;
  height: 9em;
  position: relative;
  top: -2em;
  right: -1em;
  background-color: ${theme.colors.black};
  border-radius: 50%;
  animation: ${menuBubbleAnimation} 12s linear infinite alternate;
  
  &:after,
  &:before {
    content: "";
    width: 6em;
    height: 6em;
    position: absolute;
    background-color: ${theme.colors.black};
    border-radius: 50%;
  }
  &:after {
    top: -1em;
    left: -1em;
    animation: ${menuBubbleAnimation} 8s linear infinite alternate;
  }
  &:before {
    top: 4em;
    left: 5em;
    animation: ${menuBubbleAnimation} 10s linear infinite alternate;
  }
`;
