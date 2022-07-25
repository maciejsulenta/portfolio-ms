import React from "react";
import styled from "styled-components";
import { theme } from "../assets/styles/theme";
import { useLocation } from "react-router-dom";
import ReturnButton from "../components/ReturnButton";
import ProjectPageContent from "../components/ProjectPageContent";
import Gallery from "../components/Gallery";
import { motion } from "framer-motion";
import {
  container,
  item2,
  item3,
  RouteBubble,
} from "../components/RoutesAnimations";

const Container = styled(motion.div)`
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
    <Container variants={container} initial="hidden" animate="show" exit="exit">
      <RouteBubble
        project
        br
        t="0%"
        l="0%"
        w="25%"
        h="100%"
        variants={item2}
        transition={{ duration: 0.5 }}
      />
      <RouteBubble
        project
        br
        t="100%"
        l="25%"
        w="25%"
        h="100%"
        variants={item3}
        transition={{ duration: 0.5 }}
      />
      <RouteBubble
        project
        br
        t="0%"
        l="50%"
        w="25%"
        h="100%"
        variants={item2}
        transition={{ duration: 0.5 }}
      />
      <RouteBubble
        project
        br
        t="100%"
        l="75%"
        w="25%"
        h="100%"
        variants={item3}
        transition={{ duration: 0.5 }}
      />
      <ReturnButton />
      <ProjectPageContent project={state} />
      <Gallery project={state} />
    </Container>
  );
};

export default Project;
