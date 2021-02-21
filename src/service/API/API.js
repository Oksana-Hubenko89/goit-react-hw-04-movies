import Axios from 'axios';
 
const BASE_URL = 'https://api.themoviedb.org/3/';
const KEY = '461700ffddee4ce5239e6dda1aad5503'; 
export const Trending =()=>Axios.get( `${BASE_URL}trending/movie/day?api_key=${KEY}`);
export const Search=(movieName)=>Axios.get(`${BASE_URL}search/movie?api_key=${KEY}&query=${movieName}`);
export const Details=(movieId)=>Axios.get( `${BASE_URL}movie/${movieId}?api_key=${KEY}`);
export const CastApi = (movieId) => Axios.get(`${BASE_URL}movie/${movieId}/credits?api_key=${KEY}`);
export const ReviewsApi = (movieId) => Axios.get(`${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}`);