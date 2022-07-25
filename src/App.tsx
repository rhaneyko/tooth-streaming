import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import HomePage from "./pages/HomePage";

import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
