import React, { useState, useEffect } from "react";
import axios from "../axios";
import requests from "../requests/requests";
import "../css/banner.css";

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original/";

function Banner() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.lenth > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${BASE_IMAGE_URL}${movie?.poster_path})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">Add to list</button>
        </div>
        <div className="banner-description">
          {truncate(movie?.overview, 150)}
        </div>
      </div>
      <div className="banner-fadebottom"></div>
    </header>
  );
}

export default Banner;
