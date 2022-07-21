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
