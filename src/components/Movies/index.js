const API_KEY = `4633d4711231f27cbe562a85959df2df`;
const MOVIE_URL = `https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`;
const API_LANGUAGE = `pt-br`;

function getMovieUrl(movieId) {
  return `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=${API_LANGUAGE}`;
}


