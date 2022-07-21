import styled from "styled-components";
import { theme } from "../../assets/styles/theme";

export const Container = styled.div`
  width: 100%;
  height: 20em;
  position: relative;
  background-color: ${theme.colors.black};
  clip-path: polygon(50% 100%, 100% 25%, 100% 0, 0 0, 0 25%);
`;
export const InfoWrap = styled.div`
  width: 22em;
  height: 8em;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.8em;
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
