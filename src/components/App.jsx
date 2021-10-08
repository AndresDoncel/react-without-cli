import React, { useState, useEffect, createContext } from "react";
import { Header } from "./Header";
import { FilterBar } from "./FilterBar";
import { ListMovies } from "./ListMovies";
import { Footer } from "./Footer";
import { MovieDetail } from "./MovieDetail";
import { moviesData } from "../mock/movies";
import "./global.scss";

export const App = () => {
  const userDetailContext = createContext(null);

  //user mock to implement context
  const [userDetails] = useState({
    name: "Andres",
    id: "000033",
  });

  const app = { title: "netflix", subtitle: "roulette" };

  const [movies, setMovies] = useState(moviesData);
  const [selectedMovie, setMovieSelected] = useState(null);

  //custom hook to return movies count
  const useTotalMovies = (movies) => {
    const [moviesCount, setMoviesCount] = useState(0);

    useEffect(() => {
      setMoviesCount(movies.length);
    });

    return moviesCount;
  };

  const movieSelectHandler = (event) => {
    window.scrollTo(0, 0);
    console.log("event here", event);
    setMovieSelected(event);
  };

  const searchSelected = () => {
    setMovieSelected(null);
  };

  return (
    <userDetailContext.Provider value={userDetails}>
      <div className="container_app">
        {/* TODO: make component to show moviesCount */}
        <span style={{ display: "none" }}>
          Total movies: {useTotalMovies(moviesData)}
        </span>
        {selectedMovie && (
          <MovieDetail
            onSearchSelect={searchSelected}
            selectedMovie={selectedMovie}
            app={app}
          />
        )}
        {!selectedMovie && <Header app={app} />}
        <FilterBar />
        <ListMovies onMovieSelect={movieSelectHandler} movies={movies} />
        <Footer />
      </div>
    </userDetailContext.Provider>
  );
};
