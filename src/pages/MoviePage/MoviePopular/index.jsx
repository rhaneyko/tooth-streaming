import React, { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
    
//import { Link } from 'react-router-dom';

import { 
  Container, 
  Blurred,
  Card, 
  MovieImage, 
  Content, 
  Info, 
  MovieTitle, 
  ReleaseDate, 
  Overview, 
  Genres,
 } from './styles';


const MoviePopular = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=4633d4711231f27cbe562a85959df2df&language=pt-BR'
    )
      .then((response) => response.json())
      .then((json) => setMovies(json.results));
  }, 
  []);

   const [ genres, setGenres ] = useState([]);
   useEffect(() => {
     fetch(
       'https://api.themoviedb.org/3/genre/movie/list?api_key=4633d4711231f27cbe562a85959df2df&language=pt-BR'
     )
       .then((response) => response.json())
       .then((json) => setGenres(json.genres));
   }, []);
  
  const dataFormat = (date) => {
    const dateFormat = new Date(date);
    const year = dateFormat.getFullYear();
    return `${year}`;
  }


  return (
    <Container>
      <Carousel showArrows={true} itemsToShow={1} itemsToScroll={1} disableArrowsOnEnd autoPlaySpeed={5000} enableAutoPlay
      >
        {movies &&
          movies.map((movie) => (
            <><Blurred
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
              }}
            ></Blurred><Card key={movie.id}
            >
                <MovieImage
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                <Content>
                  <Info>
                    <MovieTitle>
                      {movie.title}
                    </MovieTitle>
                    <ReleaseDate>
                      {dataFormat(movie.release_date)}
                    </ReleaseDate>
                    <Overview>
                      {movie.overview}
                    </Overview>
                    <Genres
                      
                    >
                      {genres &&
                        genres.map((genre) => (
                          movie.genre_ids.includes(genre.id) && (
                            <p key={genre.id}>{genre.name}</p>
                          )
                        ))}
                    </Genres>
                  </Info>
                </Content>
              </Card></>
          ))}
      </Carousel>
    </Container>
  );
};

export default MoviePopular;
