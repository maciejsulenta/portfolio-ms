import styled from "styled-components";

export const Container = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    position: fixed;
    z-index: 999;
  }
`;
export const Circle = styled.div`
  position: absolute;
  width: 1.5em;
  height: 1.5em;
  background: ${(props) => (props.first ? "black" : "white")};
  border: ${(props) => (props.first ? "2px solid white" : "2px solid black")};
  pointer-events: none;
  z-index: 999;
  border-radius: 50%;
`;
