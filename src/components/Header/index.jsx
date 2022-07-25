import React from "react";
import { peopleData } from "../../assets/data/peopleData";
import BurgerIcon from "../BurgerIcon";
import MenuButton from "../MenuButton";
import { Container, Person, TextWrap, Title, Text } from "./Header";
import { motion } from "framer-motion";

const Header = () => {
  const container = {
    hidden: {
      opacity: 1,
    },
    show: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };
  const item = {
    hidden: { x: 100, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };
  return (
    <Container name="home">
      <MenuButton />
      <BurgerIcon />
      <TextWrap
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <Title variants={item} transition={{ duration: 0.5 }}>
          Hello,
          <br />
          I'm Maciej Sulenta
        </Title>
        <Text variants={item} transition={{ duration: 0.5 }}>
          I'm novice developer, UX/UI designer based in Poland
        </Text>
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
