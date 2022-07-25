import styled from "styled-components";
import { keyframes } from "styled-components";
import { theme } from "../../assets/styles/theme";
import logoPic from "../../assets/images/logo.png";

const LogoAnimation = keyframes`
0% {
    transform: rotate(0);
}
80% {
    transform: rotate(160deg);
    opacity: 1;
}
100%{
    transform: rotate(200deg) scale(0);
    opacity: 0;
}
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: ${theme.colors.brown};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4em;
`;
export const Logo = styled.div`
  width: 5em;
  height: 5em;
  background-image: url(${logoPic});
  background-position: center;
  background-size: cover;
  animation: ${LogoAnimation} 2.8s linear both;

  @media screen and (min-width: 768px) {
    width: 2.5em;
    height: 2.5em;
  }
`;