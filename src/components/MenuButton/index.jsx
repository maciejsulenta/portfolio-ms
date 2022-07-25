import React from "react";
import { MenuContainer, MenuItem, MenuBubble } from "./MenuButton";

const MenuButton = () => {
  return (
    <>
      <MenuContainer
        whileInView={{ x: "0", y: "0" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <MenuItem className="link" smooth={true} duration={500} to="work">
          my <br /> work
        </MenuItem>
        <MenuBubble />
      </MenuContainer>
    </>
  );
};

export default MenuButton;
