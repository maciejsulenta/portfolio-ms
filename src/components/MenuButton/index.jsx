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
  const [isOpen, setisOpen] = useState(false);
  const setIsOpenHandler = () => {
    setisOpen(!isOpen);

    isOpen
      ? document.body.classList.remove("no-scroll")
      : document.body.classList.add("no-scroll");
  };

  return (
    <>
      <MenuContainer>
        <MenuItem smooth={true} duration={500} to="work">
          my <br /> work
        </MenuItem>
        <MenuBubble />
      </MenuContainer>
      <BurgerWrap>
        <BurgerContainer onClick={setIsOpenHandler}>
          <Burger isOpen={isOpen} />
        </BurgerContainer>
      </BurgerWrap>
      <AnimatePresence>
        {isOpen && <MobileMenu setIsOpenHandler={setIsOpenHandler} />}
      </AnimatePresence>
    </>
  );
};

export default MenuButton;
