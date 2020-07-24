import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, bigPoster }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      console.log(fetchUrl);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <h2 className='row-title'>{title}</h2>
      <div className="row-posters">
        {movies.map((movie, index) => (
          <img
            className={`row-poster ${bigPoster && "row-bigPoster"}`}
            src={`${BASE_IMAGE_URL}${
              bigPoster ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
