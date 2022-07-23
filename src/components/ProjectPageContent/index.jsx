import React from "react";
import { Container, Title, Text } from "./ProjectPageContent";

const ProjectPageContent = ({ project }) => {
  return (
    <>
      <Container key={project.id}>
        <Title>{project.title}</Title>
        <Text subtitle>about project:</Text>
        <Text dangerouslySetInnerHTML={{ __html: `${project.about}` }} />
        <Text subtitle>tech stack:</Text>
        <Text tech dangerouslySetInnerHTML={{ __html: `${project.tech}` }} />
        <Text subtitle mock>
          mockups:
        </Text>
      </Container>
    </>
  );
};

export default ProjectPageContent;
