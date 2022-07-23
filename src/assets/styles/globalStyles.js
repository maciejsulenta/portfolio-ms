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
.swiper-slide {
  list-style: none;
  padding: 0;
}
.swiper-pagination {
  height: fit-content !important;
  position: absolute !important;
  top: -1em !important;
  display: flex;
  justify-content: center;
  gap: 0.3em;

  @media screen and (min-width: 768px) {
    font-size: 0.2em;
    top: calc(100% + 2em) !important;
  }
}
.swiper-pagination-bullet {
  width: 0.3em;
  height: 0.3em;
  background-color: white;
  opacity: 1;
  transition: all 0.5s ease;

  @media screen and (min-width: 768px) {
    width: 0.5em;
    height: 0.5em;
  }
}
.swiper-pagination-bullet-active {
  background-color: brown;
  transform: scale(2);
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
    font-size: 11px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1600px) {
    font-size: 17px;
  }
  @media screen and (min-width: 1600px) {
    font-size: 20px;
  }
 }
`;
