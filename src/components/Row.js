import axios from "../axios";
import React, { useEffect, useState } from "react";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);
  return (
    <div className="text-white ml-8">
      <h2 className=" font-extrabold">{title}</h2>

      <div className="no-scrollbar flex overflow-y-hidden overflow-x-scroll py-5 pr-5">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`max-h-24 object-contain mr-3 transform duration-500 hover:scale-108 hover:opacity-100 ${
                  isLargeRow && " hover:scale-109 opacity-100 max-h-64"
                }`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt=""
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
