import React from "react";
import { Container, Bubble, MenuItemWrap, MenuItem } from "./MobileMenu";

const MobileMenu = ({ setIsOpenHandler }) => {
  const menu = {
    hidden: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const bubble = {
    hidden: {
      scale: 0,
      transition: {
        type: "spring",
        stiffness: 2000,
        damping: 200,
      },
    },
    show: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 2000,
        damping: 200,
      },
    },
  };

  return (
    <Container variants={menu} initial="hidden" animate="show" exit="hidden">
      <Bubble
        width="20em"
        height="30em"
        top="-8em"
        right="-3em"
        variants={bubble}
      />
      <Bubble
        width="25em"
        height="25em"
        top="-8em"
        right="3em"
        variants={bubble}
      />
      <Bubble
        width="10em"
        height="10em"
        top="15em"
        right="-5em"
        variants={bubble}
      />
      <MenuItemWrap>
        <MenuItem variants={bubble} onClick={setIsOpenHandler}>
          home
        </MenuItem>
        <MenuItem variants={bubble} onClick={setIsOpenHandler}>
          my work
        </MenuItem>
      </MenuItemWrap>
    </Container>
  );
};

export default MobileMenu;
