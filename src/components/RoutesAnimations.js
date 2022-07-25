import styled from "styled-components";
import { theme } from "../assets/styles/theme";
import { motion } from "framer-motion";

export const RouteBubble = styled(motion.div)`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: ${(props) => props.w};
    height: ${(props) => props.h};
    position: fixed;
    top: ${(props) => props.t};
    left: ${(props) => props.l};
    background-color: ${theme.colors.brown};
    border-radius: ${(props) => (props.br ? "0" : "50%")};
    z-index: 999;
    opacity: 1;
  }
`;
export const container = {
  hidden: {
    opacity: 1,
    transition: {
      when: "afterChildren",
      duration: 0.03,
      staggerChildren: 0.03,
    },
  },
  show: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      duration: 0.03,
      staggerChildren: 0.03,
    },
  },
  exit: {
    opacity: 1,
    transition: {
      when: "afterChildren",
      duration: 0.03,
      staggerChildren: 0.03,
    },
  },
};
export const item = {
  hidden: { scale: 2 },
  show: { scale: 0 },
  exit: { scale: 2 },
};
export const item2 = {
  hidden: { top: "0%" },
  show: { top: "100%" },
  exit: { top: "0%" },
};
export const item3 = {
  hidden: { top: "0" },
  show: { top: "-100%" },
  exit: { top: "0" },
};
