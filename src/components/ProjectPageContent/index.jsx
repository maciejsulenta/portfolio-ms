import React from "react";
import { Container, Title, Text } from "./ProjectPageContent";

const ProjectPageContent = ({ project }) => {
  return (
    <>
      <Container key={project.id}>
        <Title>{project.title}</Title>
        <Text subtitle>
          about
          <br />
          project:
        </Text>
        <Text>{project.about}</Text>
        <Text subtitle>
          tech
          <br />
          stack:
        </Text>
        <Text tech dangerouslySetInnerHTML={{ __html: `${project.tech}` }} />
        <Text subtitle>mockups:</Text>
      </Container>
    </>
  );
};

export default ProjectPageContent;
