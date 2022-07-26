import { ThemeProvider } from "styled-components";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";

import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <HomePage />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
