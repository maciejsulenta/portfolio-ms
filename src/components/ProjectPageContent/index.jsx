import React, { useState } from "react";
import { Container, Title, Text, StyledLink } from "./ProjectPageContent";

const ProjectPageContent = ({ project }) => {
  const [projectData, setProjectData] = useState(project);
  return (
    <>
      <Container key={projectData.id}>
        <Title>{projectData.title}</Title>
        <Text subtitle>about project:</Text>
        <Text dangerouslySetInnerHTML={{ __html: `${projectData.about}` }} />
        <Text subtitle>tech stack:</Text>
        <Text
          tech
          dangerouslySetInnerHTML={{ __html: `${projectData.tech}` }}
        />
        <Text>
          Check website 
          <StyledLink href={projectData.address} target="_blank">
            here!
          </StyledLink>
        </Text>
        <Text subtitle mock>
          mockups:
        </Text>
      </Container>
    </>
  );
};

export default ProjectPageContent;
