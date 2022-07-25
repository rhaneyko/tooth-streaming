import axios from 'axios'

export const key = '4633d4711231f27cbe562a85959df2df';

const apiMovie = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
});

export default apiMovie;

