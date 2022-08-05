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
  TopRatedContainerSeries,
  PopularSeriesContainer,
} from './styles';


import MovieUpcoming from '../MoviePage/MovieUpcoming';
import MovieTopRated from '../MoviePage/MovieTopRated';
import MoviePopular from '../MoviePage/MoviePopular';
import SeriesTopRated from '../SeriesPage/SeriesTopRated';
import SeriesPopular from '../SeriesPage/SeriesPopular';
import SideBar from '../../components/SideBar';
import MovieTrailer from '../MoviePage/MovieTrailer';

const HomePage = () => {
  return (
    <Container>
      <SideLeft>
        <MovieTrailer/>
      </SideLeft>
      <SideCenter>
          <Title>Filmes populares</Title>
        <PopularMoviesContainer>
          <ScrollMovies>
            <MoviePopular />
          </ScrollMovies>
        </PopularMoviesContainer>

        <TopRatedContainer>
         <Title>Melhores filmes avaliados</Title>
           <MovieTopRated/>
        </TopRatedContainer> 

        <PopularSeriesContainer>
          <Title>Series populares</Title>
            <SeriesPopular />
        </PopularSeriesContainer>

        <TopRatedContainerSeries>
          <Title>Melhores series avaliadas</Title>
          <SeriesTopRated/>
        </TopRatedContainerSeries>
      </SideCenter>

      <SideRight>
        <UpcomingContainer>
          <Title>Filmes que irão ser lançados</Title>
          <MovieUpcoming />
        </UpcomingContainer>
      </SideRight>
    </Container>
  );
};

export default HomePage;
