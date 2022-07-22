import React from "react";
import Person1 from "../../assets/images/Person21.png";
import Person2 from "../../assets/images/Person16.png";
import Person3 from "../../assets/images/Person19.png";
import {
  Container,
  Title,
  WorkCardsWrap,
  WorkCardContainer,
  CardTitle,
  CardImage,
  Footer,
  ScrollButton,
  Arrow,
} from "./MyWorkMobile";
import { projectData } from "../../assets/data/projectData";

const MyWorkMobile = () => {
  return (
    <Container name="work-mobile">
      <Title>
        my<br />work
      </Title>
      <WorkCardsWrap>
        {projectData.map((project) => (
          <WorkCardContainer
            to="/project-page"
            key={project.id}
            state={project}
          >
            <CardTitle>{project.cardTitle}</CardTitle>
            <CardImage src={project.img} />
          </WorkCardContainer>
        ))}
        <Footer>
          <Title footer>
            the<br />end
          </Title>
          <ScrollButton smooth={true} duration={500} to="home">
            <Arrow />
          </ScrollButton>
        </Footer>
      </WorkCardsWrap>
    </Container>
  );
};

export default MyWorkMobile;
