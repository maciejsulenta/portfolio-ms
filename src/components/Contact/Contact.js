import styled from "styled-components";
import { theme } from "../../assets/styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 20em;
  position: absolute;
  font-size: 3.5em;
  background-color: ${theme.colors.black};
  clip-path: polygon(50% 80%, 100% 40%, 100% 0, 0 0, 0 40%);
  transform: translateY(-1px);
  z-index: 1;

  @media screen and (min-width: 450px) {
    font-size: 2.5em;
  }
  @media screen and (min-width: 768px) {
    font-size: 1em;
  }
`;
export const InfoWrap = styled.div`
  width: fit-content;
  height: 8em;
  position: absolute;
  top: 27%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8em;

  @media screen and (min-width: 768px) {
    top: 35%;
  }
`;
export const Image = styled.img`
  width: 2.5em;
`;
export const Text = styled.p`
  font-size: ${theme.fontSizes.normal};
  font-family: "Gluten", sans-serif;
  color: ${theme.colors.white};
  text-align: center;
`;
