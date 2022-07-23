import React from "react";
import { peopleData } from "../../assets/data/peopleData";
import BurgerIcon from "../BurgerIcon";
import MenuButton from "../MenuButton";
import { Container, Person, TextWrap, Title, Text } from "./Header";
const Header = () => {
  return (
    <Container name="home">
      <MenuButton />
      <BurgerIcon/>
      <TextWrap>
        <Title>
          Hello,
          <br />
          I'm Maciej Sulenta
        </Title>
        <Text>I'm novice developer, UX/UI designer based in Poland</Text>
      </TextWrap>
      {peopleData.map((person) => (
        <Person
          key={person.id}
          img={person.img}
          speed={person.speed}
          delay={person.delay}
          walkType={person.walkType}
        />
      ))}
    </Container>
  );
};

export default Header;
