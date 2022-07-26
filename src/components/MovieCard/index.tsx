import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  // const openMovie = (movie: any) => {
  //   window.open(`https://www.themoviedb.org/movie/${movie.id}`);
  // };

  return (
    <Container>
      {movies &&
        movies.map((movie) => (
          <Card key={movie.id}>
            {/* <Link to={`/movie/${movie.id}`}> */}
            <MovieImage
              //onClick={() => openMovie(movie)}
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            />
            {/* </Link> */}
          </Card>
        ))}
    </Container>
  );
};

export default MovieCard;
