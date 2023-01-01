
const requests = {
    requestPopular : `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&page=1`,
    requestLatest : `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US`,
    requesttopRated : `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&page=1`,
    requestUpcomming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&page=1`,
    requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&page=1`

}

export default requests;