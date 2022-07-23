import React from "react";
import { projectData } from "../../assets/data/projectData";
import {
  Container,
  WorkCardsWrap,
  WorkCardContainer,
  Image,
  CardTitle,
  CardText,
  MeIcon,
  ArrowWrap,
  Arrow,
} from "./MyWorkDesktop";

const MyWorkDesktop = () => {
  return (
    <Container name="work">
      <WorkCardsWrap>
        {projectData.map((project) => (
          <WorkCardContainer
            side={project.side}
            key={project.id}
            to={`/project-page`}
            state={project}
            className="link"
          >
            <Image src={project.img} />
            <CardTitle>{project.cardTitle}</CardTitle>
            <CardText>click me!</CardText>
          </WorkCardContainer>
        ))}
      </WorkCardsWrap>
      <MeIcon />
      <ArrowWrap left="27em">
        <Arrow left />
      </ArrowWrap>
      <ArrowWrap right="27em">
        <Arrow />
      </ArrowWrap>
    </Container>
  );
};

export default MyWorkDesktop;
