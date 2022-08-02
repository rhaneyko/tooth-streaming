import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import Carousel from 'react-elastic-carousel';

import { 
    Container, 
    Card, 
    SeriesImage, 
} from './styles';

const SeriesLatest = () => {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/tv/latest?api_key=4633d4711231f27cbe562a85959df2df&language=pt-BR'
    )
      .then((response) => response.json())
      .then((json) => setSeries(json.results));
  }, []);

  return (
    <Container>
       <Carousel 
        showArrows={true} 
        itemsToShow={4} 
        itemsToScroll={1} 
        disableArrowsOnEnd 
        enableAutoPlay 
        autoPlaySpeed={5000}>
      {series &&
        series.map((series) => (
          <Card key={series.id}>
            <Link to={`/series${series.id}`}>
              <SeriesImage
                src={`https://image.tmdb.org/t/p/w500/${series.poster_path}`}
              />
            </Link>
          </Card>
        ))}
      </Carousel>
    </Container>
  );
};

export default SeriesLatest;
