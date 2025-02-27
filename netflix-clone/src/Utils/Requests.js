const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
console.log(API_KEY);
const requests = {
  // fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTrending: `/trending/all/week?api_key=f4a1dd3fba8d7f03c466065fc603bfd3&language=en-US`,

  // fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,

  fetchNetflixOriginals: `/discover/tv?api_key=f4a1dd3fba8d7f03c466065fc603bfd3&with_networks=213`,

  fetchTopRatedMovies: `/movie/top_rated?api_key=f4a1dd3fba8d7f03c466065fc603bfd3&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=f4a1dd3fba8d7f03c466065fc603bfd3&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=f4a1dd3fba8d7f03c466065fc603bfd3&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=f4a1dd3fba8d7f03c466065fc603bfd3&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=f4a1dd3fba8d7f03c466065fc603bfd3&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=f4a1dd3fba8d7f03c466065fc603bfd3&with_genres=99`,
  fetchTvShow: `tv/popular?api_key=f4a1dd3fba8d7f03c466065fc603bfd3&language=en-US&page=1`,

  // The followings are the original setups

  // fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  // fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  // fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  // fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  // fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  // fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  // fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  // fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  // fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`,
};

export default requests;

// consistent credential errors while i am trying to get information about the movie eg movie ID
