import axios from "axios";
import React, { useEffect, useState } from "react";

import { Container, Card, Image, MovieName } from "./styles";

const MovieCard = () => {
  const MOVIE_API = "https://api.themoviedb.org/3/";
  const API_KEY = "4633d4711231f27cbe562a85959df2df";
  const SEARCH_API = "search/movie";
  const DISCOVER_API = "discover/movie";    

  const [playing, setPlaying] = useState(false)
  const [trailer, setTrailer] = useState(null)
  const [movies, setMovies] = useState([])
  const [searchKey, setSearchKey] = useState("")
  const [movie, setMovie] = useState({title: "Loading Movies"})

  useEffect(() => {
      fetchMovies()
  }, [])

  const fetchMovies = async (event) => {
      if (event) {
          event.preventDefault()
      }

      const {data} = await axios.get(`${searchKey ? SEARCH_API : DISCOVER_API}`, {
          params: {
              api_key: API_KEY,
              query: searchKey
          }
      })

      console.log(data.results[0])
      setMovies(data.results)
      setMovie(data.results[0])

      if (data.results.length) {
          await fetchMovie(data.results[0].id)
      }
  }

  const fetchMovie = async (id) => {
      const {data} = await axios.get(`${MOVIE_API}movie/${id}`, {
          params: {
              api_key: API_KEY,
              append_to_response: "videos"
          }
      })

      if (data.videos && data.videos.results) {
          const trailer = data.videos.results.find(vid => vid.name === "Official Trailer")
          setTrailer(trailer ? trailer : data.videos.results[0])
      }

      setMovie(data)
  }


  const selectMovie = (movie) => {
      fetchMovie(movie.id)
      setPlaying(false)
      setMovie(movie)
      window.scrollTo(0, 0)
  }

  const renderMovies = () => (
    movies.map(movie => (
        <Card
            selectMovie={selectMovie}
            key={movie.id}
            movie={movie}
        />
    ))
)

  return (
    <Container>
        {renderMovies()}
    </Container>
  );
};

export default MovieCard;
