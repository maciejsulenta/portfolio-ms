import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html {
    box-sizing: border-box;
    font-size: 20px;
}

*, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

::-webkit-scrollbar {
    display: none;
}

.no-scroll {
    overflow: hidden;
}

body {
  font-size: 5px;
  @media screen and (min-width: 450px) {
    font-size: 8px;
  }
  @media screen and (min-width: 768px) {
    font-size: 11px;
  }
  @media screen and (min-width: 960px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 17px;
  }
  @media screen and (min-width: 1600px) {
    font-size: 20px;
  }

 }
`;
