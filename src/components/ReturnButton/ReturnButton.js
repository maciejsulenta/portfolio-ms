import styled from "styled-components";
import { theme } from "../../assets/styles/theme";
import { keyframes } from "styled-components";
import { Link } from "react-router-dom";

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

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`;
export const ButtonBubble = styled.div`
  width: 10em;
  height: 9em;
  position: relative;
  top: -3em;
  left: -3em;
  background-color: ${theme.colors.white};
  border-radius: 50%;
  animation: ${menuBubbleAnimation} 12s linear infinite alternate;

  &:after,
  &:before {
    content: "";
    width: 5em;
    height: 5em;
    position: absolute;
    background-color: ${theme.colors.white};
    border-radius: 50%;
  }
  &:after {
    top: -1em;
    left: 6em;
    animation: ${menuBubbleAnimation} 8s linear infinite alternate;
  }
  &:before {
    top: 5em;
    left: 2em;
    animation: ${menuBubbleAnimation} 10s linear infinite alternate;
  }
`;
export const ButtonArrow = styled.div`
  font-size: ${theme.fontSizes.big};
  width: 0.2em;
  height: 1.5em;
  position: relative;
  border-radius: 0.1em;
  background-color: ${theme.colors.black};
  transform: rotate(-90deg);
  z-index: 20;
  transition: all 0.2s ease;

  &:before,
  &:after {
    content: "";
    width: 0.2em;
    height: 1em;
    position: absolute;
    background-color: ${theme.colors.black};
    border-radius: 0.1em;
    transition: all 0.3s ease;
  }
  &:before {
    top: -0.15em;
    left: -0.3em;
    transform: rotate(45deg);
  }
  &:after {
    top: -0.15em;
    left: 0.3em;
    transform: rotate(-45deg);
  }
`;

export const ButtonWrap = styled(Link)`
  width: 3em;
  height: 3em;
  position: absolute;
  top: 1.2em;
  left: 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover
    ${ButtonArrow},
    &:hover
    ${ButtonArrow}:before,
    &:hover
    ${ButtonArrow}:after {
    background-color: ${theme.colors.brown};
  }
`;
