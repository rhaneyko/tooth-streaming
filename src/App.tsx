import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import HomePage from "./pages/HomePage";

import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme/theme";

const App = () => {
  const MOVIE_API = "https://api.themoviedb.org/3/";
  const API_KEY = "4633d4711231f27cbe562a85959df2df";

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(
        `${MOVIE_API}discover/movie?api_key=${API_KEY}`
      );
      const data = await response.json();
      console.log(data);
    };
    getMovies();
  });

  return (
    <ThemeProvider theme={theme}>
      <HomePage />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
