import { ThemeProvider } from "styled-components";
import NavBar from "./components/NavBar";
import HomePage from "./pages/MoviePage";
import RoutesApp from "./routes";

import GlobalStyles from "./styles/GlobalStyles";
import theme from "./styles/theme/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <RoutesApp />
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
