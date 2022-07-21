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
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    height: fit-content;
    width: fit-content;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1em;
  }
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
export const BurgerWrap = styled.div`
  position: fixed;
  top: 25px;
  right: 25px;
  z-index: 999;
`;
export const BurgerContainer = styled.div`
  width: 44px;
  height: 35px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all 0.5s ease-in-out;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const Burger = styled.div`
  width: 38px;
  height: 5px;
  background-color: ${(props) =>
    props.isOpen === true ? "transparent" : theme.colors.black};
  border-radius: 5px;
  transform: translate(
    ${(props) => (props.isOpen === true ? "-50px, 0px" : "0px, 0px;")}
  );
  transition: all 0.5s ease-in-out;

  &:after,
  &:before {
    content: "";
    width: 38px;
    height: 5px;
    position: absolute;
    background-color: ${(props) =>
      props.isOpen === true ? theme.colors.white : theme.colors.black};
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
  }
  &:after {
    transform: translate(
        ${(props) => (props.isOpen === true ? "50px, 0px" : "0px, 10px")}
      )
      rotate(${(props) => (props.isOpen === true ? "45deg" : "0deg")});
  }
  &:before {
    transform: translate(
        ${(props) => (props.isOpen === true ? "50px, 0px" : "0px, -10px")}
      )
      rotate(${(props) => (props.isOpen === true ? "-45deg" : "0deg")});
  }
`;
