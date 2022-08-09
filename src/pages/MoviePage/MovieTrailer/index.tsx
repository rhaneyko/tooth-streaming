import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';

import {
    Container,
    //NoTrailer,
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
            {trailer && trailer.map((trailer) => (
                <Player key={trailer.id}>
                    <ReactPlayer
                        url={`https://www.youtube.com/watch?v=${trailer.key}`}
                        width='100%'
                        height='100%'
                        controls={true}
                    />
                </Player>
            ))}
        </Container>
    )
}

export default MovieTrailer;
