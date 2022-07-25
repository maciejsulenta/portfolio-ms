import { AnimatePresence } from "framer-motion";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "../pages/Landing";
import Project from "../pages/Project";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Landing />} />
        <Route path="/project-page" element={<Project />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
