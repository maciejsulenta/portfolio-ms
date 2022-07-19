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

`;
