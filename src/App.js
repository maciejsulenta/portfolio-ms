import React, { useState, useEffect } from "react";
import { GlobalStyles } from "./assets/styles/globalStyles";
import { theme } from "./assets/styles/theme";
import { ThemeProvider } from "styled-components";
import Cursor from "./components/Cursor";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Loader from "./components/Loader";

const App = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {loader ? (
        <Loader />
      ) : (
        <>
          <Cursor />
          <AnimatedRoutes />
        </>
      )}
    </ThemeProvider>
  );
};

export default App;
