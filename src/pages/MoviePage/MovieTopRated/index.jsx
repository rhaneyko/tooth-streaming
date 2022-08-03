import React, { useEffect, useState, useRef } from 'react';

// import { Link } from 'react-router-dom';

import Carousel from 'react-elastic-carousel';

import { 
    Container, 
    Card, 
    MovieImage, 
} from './styles';

const MovieTopRated = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/top_rated?api_key=4633d4711231f27cbe562a85959df2df&language=pt-BR'
    )
      .then((response) => response.json())
      .then((json) => setMovies(json.results));
  }, []);

  const carouselRef = useRef(null);
  let resetTimeout;
  
  return(
    <Container>
      <Carousel
        ref={carouselRef}
        pagination={false}
        enableAutoPlay={true}
        showArrows={true}
        autoPlaySpeed={4000}
        isRTL={false}
        onNextEnd={({ index }) => {
          clearTimeout(resetTimeout)
          resetTimeout = setTimeout(() => {
          carouselRef?.current?.goTo(0)
        }, 4000)}}>
      {movies &&
        movies.map((movie) => (
          <Card key={movie.id}>
            {/* <Link to={`/movies${movie.id}`}> */}
              <MovieImage
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
            {/* </Link> */}
          </Card>
        ))}
      </Carousel>
    </Container>
  );
};

export default MovieTopRated;
