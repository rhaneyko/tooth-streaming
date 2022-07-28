import React, { useEffect, useState } from 'react'


import {
    Container,
    Card,
    Blurred,
    MovieImage,
} from './styles'

//import { key, upcomingMovies } from '../../../services/api'

const Upcoming: React.FC = () => {

    const [upcoming, setUpcoming] = useState<any[]>([]);

    // useEffect(() => {
    //     upcomingMovies
    //       .get(
    //         `/movie/upcoming?api_key=${key}&language=pt-BR&page=1`
    //       )
    //       .then(response => setUpcoming(response.data));
    //       console.log(response);
    //     }, []);
    useEffect(() => {
        fetch(
            'https://api.themoviedb.org/3/movie/upcoming?api_key=4633d4711231f27cbe562a85959df2df&language=pt-br&page=1'
            )
            .then(response => response.json())
            .then(json => setUpcoming(json.results));
       }, [])

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
                </Card></>
            ))}
      
        </Container>
    )
}

export default Upcoming;
