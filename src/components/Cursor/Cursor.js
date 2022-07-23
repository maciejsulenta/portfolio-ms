import styled from "styled-components";

export const Container = styled.div`
  display: none;
  position: fixed;
  background-color: blue;
  z-index: 999;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;
export const Circle = styled.div`
  position: absolute;
  width: 1.5em;
  height: 1.5em;
  background: linear-gradient(to right, #ef473a, #a52a2a);
  pointer-events: none;
  z-index: 999;
  border-radius: 50%;
`;
