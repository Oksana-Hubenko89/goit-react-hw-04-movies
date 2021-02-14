const BASE_URL = 'https://api.themoviedb.org/3';
const KEY='461700ffddee4ce5239e6dda1aad5503'
// https://api.themoviedb.org/3/movie/550?api_key=461700ffddee4ce5239e6dda1aad5503
async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrending() {
  return fetchWithErrorHandling(`${BASE_URL}trending/movie/day?api_key=${KEY}`);
}

export function fetchSearchMovie() {
  return fetchWithErrorHandling(`${BASE_URL}/search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false`);
}

export function fetchGetMovieDetails (movieId) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`);
}

export function fetchGetMovieReviews  (movieId) {
  return fetchWithErrorHandling(`${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`);
}