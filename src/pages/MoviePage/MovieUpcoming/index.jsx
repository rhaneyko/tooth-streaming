import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import {
    Container,
    Card,
    Blurred,
    MovieImage,
    Content,
    Info,
    MovieTitle,
    ReleaseDate,
    ButtonTrailer,
    ButtonText,
} from './styles'

//import { key, upcomingMovies } from '../../../services/api'

const MovieUpcoming = () => {
    const [upcoming, setUpcoming] = useState([]);

    useEffect(() => {
        fetch(
            'https://api.themoviedb.org/3/movie/upcoming?api_key=4633d4711231f27cbe562a85959df2df&language=pt-br'
            )
            .then(response => response.json())
            .then(json => setUpcoming(json.results));
       }, [])

       const formatDate = (date) => {
        const dateFormated = new Date(date);
        return dateFormated.toLocaleDateString('pt-BR');
       }

    return (
        <Container>
            <Carousel
                showArrows={true} 
                itemsToShow={1} 
                itemsToScroll={1} 
                disableArrowsOnEnd 
                enableAutoPlay 
                autoPlaySpeed={5000}>
            {upcoming &&
            upcoming.map(movie => (
            <>
             <Blurred
               style={{
                 backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
               }}
            ></Blurred>
                <Card key={movie.id}>
                    <MovieImage
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    />
                    <Content>
                      <Info>
                        <MovieTitle>{movie.title}</MovieTitle>
                        <ReleaseDate>Data de lançamento: {formatDate(movie.release_date)}</ReleaseDate>
                      </Info>
                        <ButtonTrailer>
                            <ButtonText>Assistir Trailer</ButtonText>
                        </ButtonTrailer>
                    </Content>
                </Card></>
            ))}
         </Carousel>
        </Container>
    )
}

export default MovieUpcoming;
