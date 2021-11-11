import React, { useState, useEffect } from "react";
import { Header } from "../Header";
import ListMovies from "../ListMovies";
import { Footer } from "../Footer";
import { MovieDetail } from "../MovieDetail";
import "../global.scss";
import SnackbarProvider from "react-simple-snackbar";
import { useNavigate } from "react-router-dom";

export const Home = ({ searchQuery, genreQuery, sortByQuery, movieQuery }) => {
  const [selectedMovie, setMovieSelected] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const app = { title: "netflix", subtitle: "roulette" };
  const navigate = useNavigate();

  const movieSelectHandler = (event) => {
    window.scrollTo(0, 0);
    setMovieSelected(event);
  };

  const searchSelected = () => {
    setMovieSelected(null);
  };

  const onChangeUrlSort = (sortOrder) => {
    navigate(`/search/?sortBy=${sortOrder}`);
  };

  return (
    <SnackbarProvider>
      <div className="container_app">
        {(selectedMovie || movieQuery) && (
          <MovieDetail
            onSearchSelect={searchSelected}
            movieId={selectedMovie ? selectedMovie.id : movieQuery}
            app={app}
          />
        )}
        {!selectedMovie && <Header searchQuery={searchQuery} app={app} />}
        <ListMovies
          onChangeUrl={onChangeUrlSort}
          sortByQuery={sortByQuery}
          genreQuery={genreQuery}
          searchQuery={searchQuery}
          onMovieSelect={movieSelectHandler}
        />
        <Footer />
      </div>
    </SnackbarProvider>
  );
};
