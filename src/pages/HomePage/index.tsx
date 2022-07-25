import MovieCard from "../../components/MovieCard";
import { Container, Title } from "./styles";

const HomePage = () => {
  return (
    <Container>
      <Title>Home Page</Title>

      <MovieCard />
    </Container>
  );
};

export default HomePage;
