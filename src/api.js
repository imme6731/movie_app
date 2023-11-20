const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";
// const mo = "movie/";
// const ko = "?language=ko-kr";
// const nowPlayingUrl = baseUrl + "movie/now_playing" + ko;
// const popularUrl = baseUrl + "movie/popular" + ko;
// const topRatedUrl = baseUrl + "movie/top_rated" + ko;
// const upcomingUrl = baseUrl + "movie/upcoming" + ko;

const url = (urlName) => {
  return baseUrl + `${urlName}` + "&language=ko-kr";
};

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODNhNTI4ZmZhNmExZDQ4YTA3MjJmMGMwZjZiOWE4NiIsInN1YiI6IjY1NGIzYTBhMjg2NmZhMDExYmQxNGEyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jyt3yRmI2eqUV1C1dnw4dTYO-DNsK6eEeI0qb_Sogtk",
  },
};

export const nowPlaying = () =>
  fetch(url("movie/now_playing"), options).then((res) => res.json());

export const popular = () =>
  fetch(url("movie/popular"), options).then((res) => res.json());

export const topRated = () =>
  fetch(url("movie/top_rated"), options).then((res) => res.json());

export const upcoming = () =>
  fetch(url("movie/upcoming"), options).then((res) => res.json());

export const movieDetail = (id) =>
  fetch(url(`movie/${id}`), options).then((res) => res.json());

export const movieSearch = (keyword) =>
  fetch(url(`search/movie?query=${keyword}`), options).then((res) =>
    res.json()
  );
