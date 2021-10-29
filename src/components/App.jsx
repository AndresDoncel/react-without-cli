import React, { useState, createContext } from "react";
import { Header } from "./Header";
import ListMovies from "./ListMovies";
import { Footer } from "./Footer";
import { MovieDetail } from "./MovieDetail";
import "./global.scss";

export const App = () => {
  const userDetailContext = createContext(null);

  const [userDetails] = useState({
    name: "Andres",
    id: "000033",
  });

  const app = { title: "netflix", subtitle: "roulette" };

  const [selectedMovie, setMovieSelected] = useState(null);

  const movieSelectHandler = (event) => {
    window.scrollTo(0, 0);
    setMovieSelected(event);
  };

  const searchSelected = () => {
    setMovieSelected(null);
  };

  return (
    <userDetailContext.Provider value={userDetails}>
      <div className="container_app">
        {selectedMovie && (
          <MovieDetail
            onSearchSelect={searchSelected}
            selectedMovie={selectedMovie}
            app={app}
          />
        )}
        {!selectedMovie && <Header app={app} />}
        <ListMovies onMovieSelect={movieSelectHandler} />
        <Footer />
      </div>
    </userDetailContext.Provider>
  );
};
