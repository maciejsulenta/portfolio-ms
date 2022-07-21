import React from "react";
import WorkCard from "../WorkCard";
import Person1 from "../../assets/images/Person1.png";
import Person2 from "../../assets/images/Person13.png";
import Person3 from "../../assets/images/Person9.png";
import { Container } from "./MyWorkDesktop";

const MyWorkDesktop = () => {
  return (
    <Container>
      <WorkCard left="25%" top="5em" img={Person1} text="pralki" />
      <WorkCard left="50%" top="10em" img={Person2} text="B28" />
      <WorkCard left="75%" top="5em" img={Person3} text="SPS" />
    </Container>
  );
};

export default MyWorkDesktop;
