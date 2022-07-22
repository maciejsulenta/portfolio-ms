import React from "react";
import {
  Container,
  Bubble,
  MenuItemsWrap,
  MenuItemContainer,
  MenuItem,
} from "./MobileMenu";

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
      <MenuItemsWrap>
        <MenuItemContainer variants={bubble}>
          <MenuItem
            variants={bubble}
            onClick={setIsOpenHandler}
            smooth={true}
            duration={500}
            to="home"
          >
            home
          </MenuItem>
        </MenuItemContainer>
        <MenuItemContainer variants={bubble}>
          <MenuItem
            onClick={setIsOpenHandler}
            smooth={true}
            duration={500}
            to="work-mobile"
          >
            my work
          </MenuItem>
        </MenuItemContainer>
      </MenuItemsWrap>
    </Container>
  );
};

export default MobileMenu;
