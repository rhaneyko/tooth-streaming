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
             'https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=4633d4711231f27cbe562a85959df2df&language=pt-BR'
         ).then(response => response.json())
         .then(json => setTrailer(json.results));
     }, [])

    return(
        <Container>
            {trailer === undefined ? (
            <NoTrailer>Infelizmente não temos o trailer 😢</NoTrailer>
          ) : (
            <Player>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${trailer[0].key}`}   
                width="100%"
                height="100%"
              />
            </Player>
          )}
        </Container>
    )
}

export default MovieTrailer;

