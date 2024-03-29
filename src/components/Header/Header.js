import styled, { keyframes } from "styled-components";
import PersonsMobile from "../../assets/images/PersonsMobile.png";
import { theme } from "../../assets/styles/theme";
import { motion } from "framer-motion";

const personWalk = keyframes`
0%{
    bottom: 0;
    left: -20%;
}
2%{
    bottom: 0.5em;
    left: -17.5%;
}
4%{
    bottom: 0;
    left: -15%;
}
6%{
    bottom: 0.5em;
    left: -12.5%;
}
8%{
    bottom: 0;
    left: -10%;
}
10%{
    bottom: 0.5em;
    left: -7.5%;
}
12%{
    bottom: 0;
    left: -5%;
}
14%{
    bottom: 0.5em;
    left: -2.5%;
}
16%{
    bottom: 0;
    left: 0%;
}
18%{
    bottom: 0.5em;
    left: 2.5%;
}
20%{
    bottom: 0;
    left: 5%;
}
22%{
    bottom: 0.5em;
    left: 7.5%;
}
24%{
    bottom: 0;
    left: 9.5%;
}
26%{
    bottom: 0.5em;
    left: 11.5%;
}
28%{
    bottom: 0;
    left: 13.8%;
}
30%{
    bottom: 0.5em;
    left: 16.1%;
}
32%{
    bottom: 0;
    left: 18.6%;
}
34%{
    bottom: 0.5em;
    left: 21.3%;
}
36%{
    bottom: 0;
    left: 23.8%;
}
38%{
    bottom: 0.5em;
    left: 26.2%;
}
40%{
    bottom: 0;
    left: 28.7%;
}
42%{
    bottom: 0.5em;
    left: 31.3%;
}
44%{
    bottom: 0;
    left: 34%;
}
46%{
    bottom: 0.5em;
    left: 36.5%;
}
48%{
    bottom: 0;
    left: 39%;
}
50%{
    bottom: 0.5em;
    left: 41.5%;
}
52%{
    bottom: 0;
    left: 44%;
}
54%{
    bottom: 0.5em;
    left: 46.5%;
}
56%{
    bottom: 0;
    left: 49%;
}
58%{
    bottom: 0.5em;
    left: 51.5%;
}
60%{
    bottom: 0;
    left: 54%;
}
62%{
    bottom: 0.5em;
    left: 56.5%;
}
64%{
    bottom: 0;
    left: 59%;
}
66%{
    bottom: 0.5em;
    left: 61.5%;
}
68%{
    bottom: 0;
    left: 64%;
}
70%{
    bottom: 0.5em;
    left: 66.5%;
}
72%{
    bottom: 0;
    left: 69%;
}
74%{
    bottom: 0.5em;
    left: 71.5%;
}
76%{
    bottom: 0;
    left: 74%;
}
78%{
    bottom: 0.5em;
    left: 76.5%;
}
80%{
    bottom: 0;
    left: 79%;
}
82%{
    bottom: 0.5em;
    left: 81.5%;
}
84%{
    bottom: 0;
    left: 84%;
}
86%{
    bottom: 0.5em;
    left: 86%;
}
88%{
    bottom: 0;
    left: 88%;
}
90%{
    bottom: 0.5em;
    left: 90%;
}
92%{
    bottom: 0;
    left: 92%;
}
94%{
    bottom: 0.5em;
    left: 94%;
}
96%{
    bottom: 0.5em;
    left: 96%;
}
98%{
    bottom: 0;
    left: 98%;
}
100%{
    bottom: 0.5em;
    left: 100%;
}
`;

const handleWalkType = (walkType) => {
  switch (walkType) {
    case "left top":
      return "scaleX(-1) translateY(-2em); animation-direction: reverse; z-index: 2;";
    case "left mid":
      return "scaleX(-1) translateY(1em); animation-direction: reverse; z-index: 3;";
    case "left bottom":
      return "scaleX(-1) translateY(2em); animation-direction: reverse; z-index: 4;";
    case "left under":
      return "scaleX(-1) translateY(3em); animation-direction: reverse; z-index: 5;";
    case "right top":
      return "translateY(-1.5em); z-index: 2;";
    case "right mid":
      return "translateY(0.5em); z-index: 3;";
    case "right bottom":
      return "translateY(2.5em); z-index: 4;";
    case "right under":
      return "translateY(3.5em); z-index: 5;";
    default:
      return "";
  }
};
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;
export const Person = styled.div`
  width: 100%;
  height: 30vh;
  position: absolute;
  bottom: 0;
  background-image: url(${PersonsMobile});
  background-size: cover;
  background-position: top center;

  @media screen and (min-width: 450px) {
    height: 35vh;
  }
  @media screen and (min-width: 768px) {
    width: 12em;
    height: 12em;
    position: absolute;
    bottom: 0;
    background-image: url(${(props) => props.img});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    animation-name: ${personWalk};
    animation-duration: ${(props) => props.speed + "s"};
    animation-delay: ${(props) => props.delay + "s"};
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
    transform: ${({ walkType }) => handleWalkType(walkType)};
  }
`;
export const TextWrap = styled(motion.div)`
  width: 16em;
  height: 26em;
  position: relative;
  top: 10vh;
  font-family: "Gluten", sans-serif;
  color: ${theme.colors.black};
  text-align: center;
  font-size: 3.5em;
  z-index: 2;
  /* background-color: cadetblue; */
  @media screen and (min-width: 450px) {
    font-size: 2em;
  }
  @media screen and (min-width: 768px) {
    width: fit-content;
    height: fit-content;
    position: absolute;
    top: 6em;
    left: 4em;
    font-size: 1.2em;
    text-align: left;
  }
`;
export const Title = styled(motion.h2)`
  font-size: 5em;
  font-family: Jackerton;
  font-weight: 400;
  line-height: 0.85em;

  @media screen and (min-width: 768px) {
    font-size: 6em;
  }
`;
export const Text = styled(motion.h3)`
  font-size: 1.8em;
  font-weight: 400;
  line-height: 1em;
  margin-top: 1em;

  @media screen and (min-width: 768px) {
    font-size: 1.5em;
    margin-top: 0.3em;
  }
`;
export const CircleWrap = styled(motion.div)`
  display: none;
  @media screen and (min-width: 768px) {
    width: 100%;
    font-size: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const Circle = styled.div`
  width: 2em;
  height: 2em;
  border-radius: 50%;
  background-color: ${theme.colors.brown};
`;
