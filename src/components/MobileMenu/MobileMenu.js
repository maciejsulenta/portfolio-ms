import styled from "styled-components";
import { motion } from "framer-motion";
import { theme } from "../../assets/styles/theme";
import { Link } from "react-scroll";

export const Container = styled(motion.div)`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  font-size: 4em;
  z-index: 900;
`;
export const Bubble = styled(motion.div)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: absolute;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  border-radius: 50%;
  background-color: ${theme.colors.black};
`;
export const MenuItemsWrap = styled(motion.div)`
  position: relative;
  top: 5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3em;
`;
export const MenuItemContainer = styled(motion.div)`
  position: relative;
`;
export const MenuItem = styled(Link)`
  color: ${theme.colors.white};
  font-family: "Gluten", sans-serif;
  font-size: ${theme.fontSizes.big};
`;
