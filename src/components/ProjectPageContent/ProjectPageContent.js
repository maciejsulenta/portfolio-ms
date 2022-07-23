import styled from "styled-components";
import { theme } from "../../assets/styles/theme";

export const Container = styled.div`
  width: clamp(260px, 75%, 550px);
  height: fit-content;
  text-align: center;
  font-size: 6em;
  color: ${theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  margin-bottom: 1.5em;
  @media screen and (min-width: 450px) {
    font-size: 5em;
  }
  @media screen and (min-width: 768px) {
    align-items: flex-start;
    font-size: 1.4em;
    flex: 1;
    text-align: left;
    gap: 0.6em;
  }
`;
export const Title = styled.h2`
  width: 4em;
  font-size: ${theme.fontSizes.big};
  font-family: "Gluten", sans-serif;
  font-weight: 400;
  line-height: 1em;

  @media screen and (min-width: 768px) {
    width: fit-content;
    font-size: ${theme.fontSizes.huge};
    padding-bottom: 0.2em;
  }
`;
export const Text = styled.p`
  width: ${(props) => (props.subtitle ? "4.5em" : "auto")};
  font-size: ${(props) =>
    props.subtitle ? theme.fontSizes.normal : theme.fontSizes.small};
  font-family: "Gluten", sans-serif;
  font-weight: ${(props) => (props.subtitle ? "700" : "100")};
  line-height: ${(props) => (props.tech ? "1.2em" : "1.1em")};
  margin-bottom: ${(props) => props.mock && "1em"};
  @media screen and (min-width: 768px) {
    width: 70%;
    padding-left: 5%;
    display: ${(props) => props.mock && "none"};
  }
`;
