import { ThemeProvider } from 'styled-components';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';

//import HomePage from './pages/MoviePage';
//import RoutesApp from './routes';

import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme/theme';

type Props = {
  closeSideBar: () => void;
}

const App: React.FC<Props> = ({closeSideBar}) => {
  return (
    <ThemeProvider theme={theme}>
      <NavBar 
        closeSideBar={closeSideBar}
      />
      <HomePage />
      <GlobalStyles />
      
    </ThemeProvider>
  );
};

export default App;
