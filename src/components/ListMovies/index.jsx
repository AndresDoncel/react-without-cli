import React from "react";
import { Component } from "react";
import MovieCard from "../MovieCard";
import ErrorBoundary from "../ErrorBundary";
import PropTypes from "prop-types";
import "./styles.scss";

class ListMovies extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  render() {
    return (
      <ErrorBoundary>
        <div className="container__movies">
          {this.props.movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </div>
      </ErrorBoundary>
    );
  }
}

ListMovies.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string,
  year: PropTypes.string,
  image: PropTypes.string,
};

export default ListMovies;
