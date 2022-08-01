import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import Carousel from 'react-elastic-carousel';

import { 
    Container, 
    Card, 
    MoviesImage, 
} from './styles';

const SeriesLatest = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/latest?api_key=4633d4711231f27cbe562a85959df2df&language=pt-BR'
    )
      .then((response) => response.json())
      .then((json) => setMovies(json.results));
  }, []);

  return (
    <Container>
       <Carousel 
        showArrows={true} 
        itemsToShow={3} 
        itemsToScroll={1} 
        disableArrowsOnEnd 
        enableAutoPlay 
        autoPlaySpeed={5000}>
      {movies &&
        movies.map((movie) => (
          <Card key={movie.id}>
            <Link to={`/movies${movie.id}`}>
              <MoviesImage
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
            </Link>
          </Card>
        ))}
      </Carousel>
    </Container>
  );
};

export default SeriesLatest;
