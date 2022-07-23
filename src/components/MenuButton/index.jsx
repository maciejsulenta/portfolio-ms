import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import MobileMenu from "../MobileMenu";
import {
  MenuContainer,
  MenuItem,
  MenuBubble,
  BurgerWrap,
  BurgerContainer,
  Burger,
} from "./MenuButton";

const MenuButton = () => {
  return (
    <>
      <MenuContainer>
        <MenuItem className="link" smooth={true} duration={500} to="work">
          my <br /> work
        </MenuItem>
        <MenuBubble />
      </MenuContainer>
    </>
  );
};

export default MenuButton;
