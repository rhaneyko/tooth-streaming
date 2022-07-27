import React from "react";
import PopularMovieCard from "./PopularMovieCard";
import { Container, PopularMoviesContainer, ScrollMovies } from "./styles";

const HomePage = () => {
  return (
    <Container>
      <PopularMoviesContainer>
        <h1>Filmes populares</h1>
        <ScrollMovies>
          <PopularMovieCard />
        </ScrollMovies>
      </PopularMoviesContainer>
    </Container>
  );
};

export default HomePage;
