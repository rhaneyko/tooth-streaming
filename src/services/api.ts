import axios from 'axios'

export const key = '4633d4711231f27cbe562a85959df2df';

export const apiMovie = axios.create({
  baseURL: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=pt-BR&page=1&include_adult=false`

});

export const movieDetail = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/`
});


