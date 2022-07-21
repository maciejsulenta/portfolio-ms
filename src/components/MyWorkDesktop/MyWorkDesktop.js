import styled from "styled-components";
import { theme } from "../../assets/styles/theme";
import myWorkBg from "../../assets/images/myWorkBg.png";

export const Container = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    background-image: url(${myWorkBg});
  }
`;
export const WorkCardContainer = styled.div`
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
  right: 1.5em;
  bottom: 0.3em;
  font-family: "Gluten", sans-serif;
  font-size: ${theme.fontSizes.small};
`;
