import React, { useEffect, useState } from "react";

import { Container, Card, Image } from "./styles";

const KEY = "4633d4711231f27cbe562a85959df2df";
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${KEY}&language=pt-BR`;

const MovieCard: React.FC = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);
  return (
    <Container>
      <Card></Card>
    </Container>
  );
};

export default MovieCard;
