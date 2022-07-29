import React from 'react';

import { 
  Container, 
  SideLeft,
  SideCenter,
  SideRight,
  Title,
  PopularMoviesContainer, 
  ScrollMovies,
  UpcomingContainer, 
  TopRatedContainer,
} from './styles';

import PopularMovieCard from './PopularMovieCard';
import Upcoming from './Upcoming';
import TopRated from './TopRated';

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
          <Title>Filmes populares</Title>
          <ScrollMovies>
            <PopularMovieCard />
          </ScrollMovies>
        </PopularMoviesContainer>
        <TopRatedContainer>
        <Title>Melhores avaliados</Title>
          <TopRated/>
        </TopRatedContainer> 

      </SideCenter>
      <SideRight>
        <UpcomingContainer>
        <Title>Irão ser lançados</Title>
          <Upcoming />
        </UpcomingContainer>
      </SideRight>
      {/* </div> */}
    </Container>
  );
};

export default HomePage;
