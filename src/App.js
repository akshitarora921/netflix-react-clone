import React from "react";
import requests from "./requests/requests";
import "./App.css";
import Row from "./Components/Row";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Row
        title="Netflix Originals"
        bigPoster={true}
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      {/*   <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> */}
    </div>
  );
}

export default App;
