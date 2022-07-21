import styled from "styled-components";
import { theme } from "../../assets/styles/theme";
import myWorkBg from "../../assets/images/myWorkBg.png";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  font-size: 8em;
  overflow: hidden;
  background-image: url(${myWorkBg});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media screen and (min-width: 450px) {
    font-size: 4em;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
export const Title = styled.div`
  position: relative;
  font-size: ${theme.fontSizes.big};
  font-family: "Fredericka the Great", sans-serif;
  text-align: center;
  line-height: 0.9em;
  margin: ${(props) => (props.footer ? "0" : "4em 0 0.5em 0")};

  @media screen and (min-width: 450px) {
    margin: ${(props) => (props.footer ? "0" : "5.5em 0 1em 0")};
  }
`;
export const WorkCardsWrap = styled.div`
  width: 100%;
  position: relative;
  padding-bottom: 2em;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5em;

  @media screen and (min-width: 450px) {
    gap: 3em;
  }
`;
export const WorkCardContainer = styled.div`
  width: 70%;
  max-width: 350px;
  aspect-ratio: 1/1;
  position: relative;
  background-color: ${theme.colors.black};
  border-radius: 1em;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s ease;

  &:active {
    transform: scale(1.05);
    background-color: ${theme.colors.brown};
  }
`;
export const CardTitle = styled.span`
  font-size: ${theme.fontSizes.normal};
  font-family: "Fredericka the Great", sans-serif;
  color: ${theme.colors.white};
  transform: translateY(-0.5em);

  @media screen and (min-width: 450px) {
    font-size: ${theme.fontSizes.big};
    transform: translateY(-0.2em);
  }
`;
export const CardImage = styled.img`
  width: 40%;
  position: absolute;
  left: 50%;
  bottom: -1em;
  transform: translateX(-50%);

  @media screen and (min-width: 450px) {
    width: 30%;
  }
`;
export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8em;
`;
export const ScrollButton = styled.div`
  width: 3em;
  height: 3em;
  border: 0.2em solid ${theme.colors.black};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  cursor: pointer;
  transition: all 0.1s ease;

  &:active {
    transform: scale(1.1);
    border-color: ${theme.colors.brown};
  }
`;
export const Arrow = styled.div`
  width: 0.2em;
  height: 1.5em;
  position: relative;
  border-radius: 0.1em;
  background-color: ${theme.colors.black};

  &:before,
  &:after {
    content: "";
    width: 0.2em;
    height: 1em;
    position: absolute;
    background-color: ${theme.colors.black};
    border-radius: 0.1em;
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
