import React, { useEffect, useState } from "react";

import { Container, Card, MovieImage } from "./styles";

const MovieCard = () => {
  const [movies, setMovies] = useState<any[]>();
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=4633d4711231f27cbe562a85959df2df&language=pt-BR"
    )
      .then((response) => response.json())
      .then((json) => setMovies(json.results))
      .catch((error) => console.log(error));
  }, []);

  const openMovie = (movie: any) => {
    window.open(`https://www.themoviedb.org/movie/${movie.id}`);
  };

  return (
    <Container>
      {movies &&
        movies.map((movie) => (
          <Card key={movie.id}>
            <MovieImage
              onClick={() => openMovie(movie)}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
          </Card>
        ))}
    </Container>
  );
};

export default MovieCard;
