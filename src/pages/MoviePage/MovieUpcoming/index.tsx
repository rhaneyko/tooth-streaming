import React, { useEffect, useState } from 'react'

import {
    Container,
    Card,
    MovieImage,
    Content,
    Info,
    MovieTitle,
    ReleaseDate,
    ButtonTrailer,
    ButtonText,
} from './styles'



const MovieUpcoming: React.FC = () => {
    const [upcoming, setUpcoming] = useState<any[]>();

    useEffect(() => {
        fetch(
            'https://api.themoviedb.org/3/movie/upcoming?api_key=4633d4711231f27cbe562a85959df2df&language=pt-br'
            )
            .then(response => response.json())
            .then(json => setUpcoming(json.results));
       }, [])

       const formateDate = (date: number) => {
         const dateFormate = new Date(date);
         return dateFormate.toLocaleDateString('pt-BR');
       }

    return (
        <Container>
            {upcoming &&
            upcoming.map(movie => (
                <Card key={movie.id}>
                    <MovieImage
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    />
                    <Content>
                      <Info>
                        <MovieTitle>{movie.title}</MovieTitle>
                        <ReleaseDate>Data de lançamento: {formateDate(movie.release_date)}</ReleaseDate>
                      </Info>
                        <ButtonTrailer>
                            <ButtonText>Assistir Trailer</ButtonText>
                        </ButtonTrailer>
                    </Content>
                </Card>
            ))}
        </Container>
    )
}

export default MovieUpcoming;
