import MovieCard from './MovieCard';
import { 
  Container,
  MoviesContainer,
  Title, 
} from './styles';

import MoviePopular from './MoviePopular'
import MovieTopRated from './MovieTopRated';

const MoviePage = () => {
  return (
    <Container>
      <MoviesContainer>
      <Title>Popular Series</Title>
      <MoviePopular/>

      <Title>Top Rated Movies</Title>
          <MovieTopRated/>
          <Title>Latest Movies</Title>
          {/* <SeriesLatest/> */}

      </MoviesContainer>
    </Container>
  );
};

export default MoviePage;
