import axios from 'axios'

export const key = '4633d4711231f27cbe562a85959df2df';

export const apiMovie = axios.create({
  baseURL: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=pt-BR&page=1&include_adult=false`

});

export const movieDetail = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/`
});

export const topRatedMovies = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`
});

export const popularMovies = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=pt-BR&page=1`
});

export const latestMovies = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`
});

