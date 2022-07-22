import React from "react";
import { GlobalStyles } from "./assets/styles/globalStyles";
import { theme } from "./assets/styles/theme";
import { ThemeProvider } from "styled-components";
import { Routes, Route, Link } from "react-router-dom";
import Landing from "./pages/Landing";
import Project from "./pages/Project";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/project-page" element={<Project />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
