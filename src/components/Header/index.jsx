import React from "react";
import { Container, Person } from "./Header";
import { peopleData } from "../../assets/data/peopleData";

const Header = () => {
  return (
    <Container>
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
