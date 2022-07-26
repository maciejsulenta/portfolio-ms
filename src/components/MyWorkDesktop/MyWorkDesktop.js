import styled from "styled-components";
import { keyframes } from "styled-components";
import { theme } from "../../assets/styles/theme";
import { Link } from "react-router-dom";
import myWorkBg from "../../assets/images/myWorkBg.png";
import MeImg from "../../assets/images/Me.png";
import MeImg1 from "../../assets/images/Me1.png";

export const ArrowAnimationLeft = keyframes`
from{
  transform: translate(0);
}
to{
  transform: translate(2em, -2em);
}
`;
export const ArrowAnimationRight = keyframes`
from{
  transform: translate(0);
}
to{
  transform: translate(-2em, -2em);
}
`;

export const Container = styled.div`
  display: none;
  z-index: 4;
  @media screen and (min-width: 768px) {
    display: block;
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    background-image: url(${myWorkBg});
  }
`;
export const WorkCardsWrap = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transform: translateY(-3em);
`;
export const WorkCardContainer = styled(Link)`
  width: 15em;
  height: 25em;
  position: relative;
  border: 0.8em solid ${theme.colors.black};
  border-radius: 2em;
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  text-decoration: none;
  cursor: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  transform: ${(props) => (props.side ? "translateY(-5em)" : "translateY(0)")};
  &:hover {
    transform: ${(props) =>
      props.side ? "translateY(2em)" : "translateY(7em)"};
    background-color: ${theme.colors.brown};
  }
  &:active {
    transform: ${(props) =>
      props.side ? "translateY(2em) scale(1.1)" : "translateY(7em) scale(1.1)"};
  }
`;
export const Image = styled.img`
  width: 60%;
  transform: rotate(180deg) translateY(10em);
  overflow: hidden;
  transition: all 0.3s ease;

  ${WorkCardContainer}:hover & {
    transform: rotate(180deg) translateY(-7em);
  }
`;
export const CardTitle = styled.span`
  font-size: ${theme.fontSizes.big};
  font-family: "Gluten", sans-serif;
  padding: 1em;
  transition: all 0.3s ease;

  ${WorkCardContainer}:hover & {
    font-size: ${theme.fontSizes.huge};
    padding: 0.3em;
  }
`;
export const CardText = styled.p`
  position: absolute;
  bottom: 0.2em;
  right: 1.5em;
  font-family: "Gluten", sans-serif;
  font-size: ${theme.fontSizes.small};
`;
export const MeIcon = styled.div`
  width: 15em;
  height: 15em;
  position: absolute;
  bottom: -1em;
  left: 50%;
  transform: translateX(-50%);
  background-image: url(${MeImg});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.1s linear;
  &:hover {
    background-image: url(${MeImg1});
  }
`;
export const ArrowWrap = styled.div`
  position: absolute;
  bottom: 5em;
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  animation-name: ${(props) =>
    props.left ? ArrowAnimationLeft : ArrowAnimationRight};
  animation-duration: 1.5s;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;
export const Arrow = styled.div`
  width: 1.5em;
  height: 8em;
  background-color: ${theme.colors.black};
  border-radius: 1em;
  transform: ${(props) => (props.left ? "rotate(35deg)" : "rotate(-35deg)")};

  &:after,
  &:before {
    content: "";
    width: 1.5em;
    height: 5em;
    position: absolute;
    background-color: ${theme.colors.black};
    border-radius: 1em;
  }
  &:after {
    top: -1em;
    left: -1.3em;
    transform: rotate(45deg);
  }
  &:before {
    top: -1em;
    left: 1.3em;
    transform: rotate(-45deg);
  }
`;
