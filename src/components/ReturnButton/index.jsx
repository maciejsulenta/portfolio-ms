import React from "react";
import {
  Container,
  ButtonBubble,
  ButtonArrow,
  ButtonWrap,
} from "./ReturnButton";

const ReturnButton = () => {
  return (
    <Container>
      <ButtonBubble />
      <ButtonWrap to="/">
        <ButtonArrow />
      </ButtonWrap>
    </Container>
  );
};

export default ReturnButton;
