import React from "react";
import { projectData } from "../../assets/data/projectData";
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

const MyWorkMobile = () => {
  return (
    <Container name="work-mobile">
      <Title>
        my
        <br />
        work
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
            the
            <br />
            end
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
