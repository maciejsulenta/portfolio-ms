import styled from "styled-components";
import { theme } from "../../assets/styles/theme";

export const BurgerWrap = styled.div`
  position: fixed;
  top: 25px;
  right: 25px;
  z-index: 999;
  display: block;
  mix-blend-mode: difference;

  @media screen and (min-width: 768px) {
    display: none;
  }
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
  background: transparent;
`;
export const Burger = styled.div`
  width: 38px;
  height: 5px;
  background-color: ${theme.colors.white};
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
    background-color: ${theme.colors.white};
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
