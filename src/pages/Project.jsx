import React from "react";
import styled from "styled-components";
import { theme } from "../assets/styles/theme";
import { useLocation } from "react-router-dom";
import ReturnButton from "../components/ReturnButton";
import ProjectPageContent from "../components/ProjectPageContent";
import Gallery from "../components/Gallery";

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 10em 0;
  background-color: ${theme.colors.black};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 0 10em;
    gap: 4em;
  }
`;

const Project = () => {
  const location = useLocation();
  const state = location.state;
  return (
    <Container>
      <ReturnButton />
      <ProjectPageContent project={state} />
      <Gallery project={state} />
    </Container>
  );
};

export default Project;
