import styled from "styled-components";
import { theme } from "../../assets/styles/theme";

export const Container = styled.div`
  width: 15em;
  height: 25em;
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  border: 0.8em solid ${theme.colors.black};
  border-radius: 2em;
  transform: translate(-50%, -50%);
  background-color: white;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  &:hover {
    transform: translate(-50%, -20%);
    background-color: ${theme.colors.brown};
  }
`;
export const Image = styled.img`
  width: 60%;
  transform: rotate(180deg) translateY(10em);
  overflow: hidden;
  transition: all 0.3s ease;

  ${Container}:hover & {
    transform: rotate(180deg) translateY(-7em);
  }
`;
export const CardTitle = styled.span`
  font-size: ${theme.fontSizes.big};
  font-family: "Gluten", sans-serif;
  padding: 1em;
  transition: all 0.3s ease;

  ${Container}:hover & {
    font-size: ${theme.fontSizes.huge};
    padding: 0.3em;
  }
`;
export const CardText = styled.p`
  position: absolute;
  right: 1.5em;
  bottom: 0.3em;
  font-family: "Gluten", sans-serif;
  font-size: ${theme.fontSizes.small};
`;
