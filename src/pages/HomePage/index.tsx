import { BrowserRouter as Router } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import MovieCard from "../../components/MovieCard";
import { Container, Header, Nav, MoviesContainer, Title } from "./styles";

const HomePage = () => {
  return (
    <Container>
      <Header>
        <Title>LOGO</Title>
        <Router>
          <Nav>
            <NavHashLink smooth to="#home">
              Home
            </NavHashLink>
            <NavHashLink smooth to="#about">
              Filmes
            </NavHashLink>
            <NavHashLink smooth to="#projects">
              Series
            </NavHashLink>
          </Nav>
        </Router>
      </Header>
      <MoviesContainer>
        <MovieCard />
      </MoviesContainer>
    </Container>
  );
};

export default HomePage;
