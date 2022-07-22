import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../assets/styles/theme";
import ReturnButton from "../components/ReturnButton";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${theme.colors.black};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Project = () => {
  return (
    <Container>
      <ReturnButton />
    </Container>
  );
};

export default Project;
