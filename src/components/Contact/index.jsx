import React from "react";
import IconContact from "../../assets/images/iconContact.png";
import { Container, InfoWrap, Image, Text, StyledLink } from "./Contact";

const Contact = () => {
  return (
    <Container>
      <InfoWrap>
        <Image src={IconContact} alt="contact-icon" />
        <Text>
          <StyledLink className="link" href="mailto: maciej.sulenta@gmail.com">
            maciej.sulenta@gmail.com
          </StyledLink>
        </Text>
        <Text>
          <StyledLink className="link" href="https://github.com/maciejsulenta" target="_blank">
            github.com/maciejsulenta
          </StyledLink>
        </Text>
      </InfoWrap>
    </Container>
  );
};

export default Contact;
