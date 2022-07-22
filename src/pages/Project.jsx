import React from "react";
import styled from "styled-components";
import { theme } from "../assets/styles/theme";
import { useLocation } from "react-router-dom";
import ReturnButton from "../components/ReturnButton";
import ProjectPageContent from "../components/ProjectPageContent";
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 10em 0;
  background-color: ${theme.colors.black};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Project = () => {
  const location = useLocation();
  const state = location.state;
  return (
    <Container>
      <ReturnButton />
      <ProjectPageContent project={state} />
    </Container>
  );
};

export default Project;
