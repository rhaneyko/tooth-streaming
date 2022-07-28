import React, { useEffect, useState } from 'react'


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

const Upcoming: React.FC = () => {
    const [upcoming, setUpcoming] = useState<any[]>([]);

    useEffect(() => {
        fetch(
            'https://api.themoviedb.org/3/movie/upcoming?api_key=4633d4711231f27cbe562a85959df2df&language=pt-br&page=1'
            )
            .then(response => response.json())
            .then(json => setUpcoming(json.results));
       }, [])

       const formatDate = (date: string) => {
        const dateFormate = new Date(date);
        return dateFormate.toLocaleDateString('pt-BR');
    }


    return (
        <Container>
            {
            upcoming &&
            upcoming.map(movie => (
                <><Blurred
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
                        <ReleaseDate>{formatDate(movie.release_date)}</ReleaseDate>
                      </Info>
                        <ButtonTrailer>
                            <ButtonText>Watch Trailer</ButtonText>
                        </ButtonTrailer>
                    </Content>
                </Card></>
            ))}
      
        </Container>
    )
}

export default Upcoming;
