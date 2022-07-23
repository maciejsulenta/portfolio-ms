import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import MobileMenu from "../MobileMenu";
import { BurgerWrap, BurgerContainer, Burger } from "./BurgerIcon";

const BurgerIcon = () => {
  const [isOpen, setisOpen] = useState(false);
  const setIsOpenHandler = () => {
    setisOpen(!isOpen);

    isOpen
      ? document.body.classList.remove("no-scroll")
      : document.body.classList.add("no-scroll");
  };

  return (
    <>
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

export default BurgerIcon;
