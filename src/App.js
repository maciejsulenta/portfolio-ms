import React from "react";
import { GlobalStyles } from "./assets/styles/globalStyles";
import { theme } from "./assets/styles/theme";
import { ThemeProvider } from "styled-components";
import Landing from "./pages/Landing";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Landing />
    </ThemeProvider>
  );
};

export default App;
