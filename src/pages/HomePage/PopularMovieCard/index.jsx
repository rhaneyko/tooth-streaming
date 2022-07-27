import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
//import { Link } from "react-router-dom";

import { Container, Card, MovieImage, Content, Info, MovieTitle, ReleaseDate, VoteAverage, Overview, Buttons, ButtonTrailer, ButtonWatchMovie, ButtonText } from "./styles";


const PopularMovieCard = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=4633d4711231f27cbe562a85959df2df&language=en-US&page=1"
    )
      .then((response) => response.json())
      .then((json) => setMovies(json.results));
  }, []);

  const [ genres, setGenres ] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=4633d4711231f27cbe562a85959df2df&language=en-US"
    )
      .then((response) => response.json())
      .then((json) => setGenres(json.genres));
  }, []);

  const [trailer, setTrailer] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=4633d4711231f27cbe562a85959df2df&language=en-US"
    )
      .then((response) => response.json())
      .then((json) => setTrailer(json.results));
  }, []);

  return (
    <Container>
      <Carousel showArrows={true} itemsToShow={1} itemsToScroll={1} disableArrowsOnEnd >
        {movies &&
          movies.map((movie) => (
            <Card key={movie.id}
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
                <MovieImage
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
                <Content>

                <Info>
                  <MovieTitle>{movie.title}</MovieTitle>
                    <ReleaseDate>
                      {movie.release_date}
                    </ReleaseDate>
                    <VoteAverage>
                      {movie.vote_average}
                    </VoteAverage>
                     <Overview>
                      {movie.overview}
                    </Overview>
                   {/* <p
                   >
                    {movie.genre_ids.map((genre) => {
                      return genres.find((g) => g.id === genre).name;
                    }
                    )}
                  </p> */}
                </Info>
                <Buttons>
                  <ButtonTrailer>
                    <ButtonText>Trailer</ButtonText>
                  </ButtonTrailer>
                  <ButtonWatchMovie>
                    <ButtonText>Watch Movie</ButtonText>
                  </ButtonWatchMovie>
                </Buttons>
                </Content>
            </Card>
          ))}
      </Carousel>
    </Container>
  );
};

export default PopularMovieCard;
