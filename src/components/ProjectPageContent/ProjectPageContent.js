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
  gap: 1em;
  margin-bottom: 1em;

  @media screen and (min-width: 450px) {
    font-size: 5em;
  }
`;
export const Title = styled.h2`
  font-size: ${theme.fontSizes.big};
  font-family: "Fredericka the Great", sans-serif;
  font-weight: 400;
  line-height: 1em;
`;
export const Text = styled.p`
  font-size: ${(props) =>
    props.subtitle ? theme.fontSizes.normal : theme.fontSizes.small};
  font-family: "Gluten", sans-serif;
  font-weight: ${(props) => (props.subtitle ? "700" : "100")};
  line-height: ${(props) => (props.tech ? "1.2em" : "1em")};
`;
