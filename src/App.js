import React from "react";
import { GlobalStyles } from "./assets/styles/globalStyles";
import { theme } from "./assets/styles/theme";
import { ThemeProvider } from "styled-components";
import Cursor from "./components/Cursor";
import AnimatedRoutes from "./components/AnimatedRoutes";

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Cursor />
      <AnimatedRoutes />
    </ThemeProvider>
  );
};

export default App;
