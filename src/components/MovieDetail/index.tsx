import React, { useEffect, useState } from 'react'

import { Container, Card, MovieImage } from './styles'

const MovieDetail = () => {
    const [movies, setMovies] = useState<any[]>()
    
    useEffect(() => {
        fetch(
            "https://api.themoviedb.org/3/movie/"

        )
            .then((response) => response.json())
            .then((json) => setMovies(json.results))
            .catch((error) => console.log(error))
    }, [])
    
    return(
        <Container>
            {movies &&
                movies.map((movie) => (
                    <Card key={movie.id}>
                        <MovieImage
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        />
                    </Card>
                ))}
        </Container>
    )
}

export default MovieDetail;