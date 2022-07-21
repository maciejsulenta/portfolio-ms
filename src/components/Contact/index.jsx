import React from "react";
import IconContact from "../../assets/images/iconContact.png";
import { Container, InfoWrap, Image, Text } from "./Contact";

const Contact = () => {
  return (
    <Container>
      <InfoWrap>
        <Image src={IconContact} alt="contact-icon" />
        <Text>maciej.sulenta@gmail.com</Text>
        <Text>github.com/maciejsulenta</Text>
      </InfoWrap>
    </Container>
  );
};

export default Contact;
