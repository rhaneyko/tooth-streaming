import React from 'react'

import { 
  Container,
  MoviesContainer,
  Title, 
} from './styles';

import MoviePopular from './MoviePopular'
import MovieTopRated from './MovieTopRated';
import MovieLatest from './MovieLatest';
import MovieUpcoming from './MovieUpcoming';

const MoviePage = () => {
  return (
    <Container>
      <MoviesContainer>
        <Title>Popular Series</Title>
         <MoviePopular/>
        <Title>Top Rated Movies</Title>
         <MovieTopRated/>
        <Title>Latest Movies</Title>
         <MovieLatest/>
        <Title>Upcoming Movies</Title>
        <MovieUpcoming/>
      </MoviesContainer>
    </Container>
  );
};

export default MoviePage;
