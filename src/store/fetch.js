const key = "30347d11bc2411a2e9e95c44763dea3c";

export const searchTopMovies = () => {
  const response = fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`
  );
  return response;
};

export const searchMovies = (input, page) => {
  const response = fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${input}&page=${page}&include_adult=false`
  );
  return response;
};

export const getMovieDetails = (id) => {
  const response = fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
  );
  return response;
};

export const getConfigurationImg = () => {
  const response = fetch(
    `https://api.themoviedb.org/3/configuration?api_key=${key}`
  );
  return response;
};

export const getActorsList = (id) => {
  const response = fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`
  );
  return response;
};

export const getMovieReviews = (id) => {
  const response = fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`
  );
  return response;
};
