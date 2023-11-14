const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";
const nowPlayingUrl = baseUrl + "movie/now_playing" + "?language=ko-kr";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODNhNTI4ZmZhNmExZDQ4YTA3MjJmMGMwZjZiOWE4NiIsInN1YiI6IjY1NGIzYTBhMjg2NmZhMDExYmQxNGEyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Jyt3yRmI2eqUV1C1dnw4dTYO-DNsK6eEeI0qb_Sogtk",
  },
};

export const nowPlaying = () =>
  fetch(nowPlayingUrl, options).then((res) => res.json());
