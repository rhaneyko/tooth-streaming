import React from 'react';

import { 
  Container, 
  SideLeft,
  SideCenter,
  SideRight,
  PopularMoviesContainer, 
  ScrollMovies,
  UpcomingContainer, 
} from './styles';

import PopularMovieCard from './PopularMovieCard';
import Upcoming from './Upcoming';

const HomePage = () => {
  return (
    <Container>
      {/* <div
        style={{
          display: 'flex',
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',

          background: 'white'
        }}
      > */}
      <SideLeft></SideLeft>
      <SideCenter>
        <PopularMoviesContainer>
          <h1>Filmes populares</h1>
          <ScrollMovies>
            <PopularMovieCard />
          </ScrollMovies>
        </PopularMoviesContainer> 

      </SideCenter>
      <SideRight>
        <UpcomingContainer>
        <h1>Irão ser lançados</h1>
          <Upcoming />
        </UpcomingContainer>
      </SideRight>
      {/* </div> */}
    </Container>
  );
};

export default HomePage;
