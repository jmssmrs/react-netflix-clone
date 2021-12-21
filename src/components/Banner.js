import React, { useEffect, useState } from "react";
import requests from "../requests";
import axios from "../axios";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="h-448px relative object-contain text-white"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="ml-8 pt-36 h-48">
        <h1 className="font-extrabold text-5xl pb-2">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div>
          <button className="btn-banner">Play</button>
          <button className="btn-banner">My List</button>
        </div>
        <h1 className="w-45rem leading-snug pt-4 text-sm max-w-sm h-20">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="absolute bottom-0 h-7.4rem w-full bg-gradient-to-b from-transparent via-netflix-bannerGradientMiddle to-netflix-black" />
    </header>
  );
}

export default Banner;
