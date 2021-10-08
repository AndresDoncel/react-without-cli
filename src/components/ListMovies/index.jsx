import React from "react";
import { MovieCard } from "../MovieCard";
import ErrorBoundary from "../ErrorBundary";
import PropTypes from "prop-types";
import "./styles.scss";

export const ListMovies = ({ movies, onMovieSelect }) => {
  return (
    <ErrorBoundary>
      <div className="container__movies">
        {movies.map((movie) => {
          return (
            <MovieCard
              onMovieSelect={onMovieSelect}
              key={movie.id}
              movie={movie}
            />
          );
        })}
      </div>
    </ErrorBoundary>
  );
};

ListMovies.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string,
  year: PropTypes.string,
  image: PropTypes.string,
};

export default ListMovies;
