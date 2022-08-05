import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { useRouteMatch } from 'react-router-dom';
import { key, movieDetail } from '../../../services/api';


import {
    Container,
    Title,
    Player,
} from './styles'

interface Props {
    id: string;
}

const MovieTrailer: React.FC = () => {
    const { params } = useRouteMatch<Props>();
  console.log(params.id);
  const [repository, setRepository] = useState<any>(null);
  const poster = 'http://image.tmdb.org/t/p/w342/';

  useEffect(() => {
    movieDetail
      .get(
        `${params.id}?api_key=${key}&language=pt-BR&append_to_response=videos`,
      )
      .then(response => setRepository(response.data));
  }, [params.id]);
    // const [trailer, setTrailer] = useState<any[]>();

    // useEffect(() => {
    //     fetch(
    //         'https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=4633d4711231f27cbe562a85959df2df&language=pt-BR'
    //     ).then(response => response.json())
    //     .then(json => setTrailer(json.results));
    // }, [])
    
    
    return(
        <Container>
           {repository?.videos?.results[0]?.key === undefined ? (
            <p>Infelizmente não temos o trailer 😢</p>
          ) : (
            <Player>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${repository.videos.results[0].key}`}
                width="100%"
                height="100%"
              />
            </Player>
          )}
        </Container>
    )
}

export default MovieTrailer;

