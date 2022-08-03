import React, { useEffect, useState, useRef } from 'react';
import Carousel from 'react-elastic-carousel';
    
//import { Link } from 'react-router-dom';

import { 
  Container, 
  Blurred,
  Card, 
  SeriesImage, 
  Content, 
  Info, 
  SeriesTitle, 
  Genres,
 } from './styles';


const SeriesPopular = () => {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/tv/popular?api_key=4633d4711231f27cbe562a85959df2df&language=pt-BR'
    )
      .then((response) => response.json())
      .then((json) => setSeries(json.results));
  }, 
  []);

   const [ genres, setGenres ] = useState([]);
   useEffect(() => {
     fetch(
       'https://api.themoviedb.org/3/genre/tv/list?api_key=4633d4711231f27cbe562a85959df2df&language=pt-BR'
     )
       .then((response) => response.json())
       .then((json) => setGenres(json.genres));
   }, []);
   
  const itemsPerPage = 1
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
          itemsToShow={1}
        >
        {series &&
          series.map((series) => (
            <><Blurred
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${series.poster_path})`,
              }}
            ></Blurred>
            
            <Card key={series.id}>
                <SeriesImage
                  src={`https://image.tmdb.org/t/p/w500/${series.poster_path}`} 
                />
                <Content>
                  <Info>
                    <SeriesTitle>
                      {series.name}
                    </SeriesTitle>
                    <Genres
                      
                    >
                      {genres &&
                        genres.map((genre) => (
                          series.genre_ids.includes(genre.id) && (
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

export default SeriesPopular;
