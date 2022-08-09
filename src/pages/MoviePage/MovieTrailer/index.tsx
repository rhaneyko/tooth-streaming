import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';

import {
    Container,
    NoTrailer,
    Player,
} from './styles'

const MovieTrailer: React.FC = () => {
   const [trailer, setTrailer] = useState<any[]>();

    useEffect(() => {
         fetch(
             'https://api.themoviedb.org/3/movie/videos?api_key=4633d4711231f27cbe562a85959df2df&language=pt-BR'
         ).then(response => response.json())
         .then(json => setTrailer(json.results));
     }, [])

    return(
        <Container>

        </Container>
    )
}

export default MovieTrailer;
