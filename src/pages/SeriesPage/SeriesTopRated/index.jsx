import React, { useEffect, useState, useRef } from 'react';

// import { Link } from 'react-router-dom';


import Carousel from 'react-elastic-carousel';

import { 
    Container, 
    Card, 
    MovieImage, 
} from './styles';

const TopRated = () => {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=4633d4711231f27cbe562a85959df2df&language=pt-BR'
    )
      .then((response) => response.json())
      .then((json) => setSeries(json.results));
  }, []);

  const itemsPerPage = 4
  const items = [...series];
  const ref = useRef(null);
  const totalPages = Math.ceil(items.length / itemsPerPage)
  let resetTimeout;
  
    return (
      <Container>
        <Carousel 
          ref={ref}
          enableAutoPlay
          autoPlaySpeed={5000}
          onNextEnd={({ index }) => {
                clearTimeout(resetTimeout)
                if (index + 1 === totalPages) {
                   resetTimeout = setTimeout(() => {
                      ref.current.goTo(0)
                  }, 5000)
                }
           }} 
          itemsToShow={itemsPerPage}>
      {series &&
        series.map((series) => (
          <Card key={series.id}>
            {/* <Link to={`/movies${series.id}`}> */}
              <MovieImage
                src={`https://image.tmdb.org/t/p/w500/${series.poster_path}`}
              />
            {/* </Link> */}
          </Card>
        ))}
      </Carousel>
    </Container>
  );
};

export default TopRated;
