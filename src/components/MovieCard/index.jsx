import React from "react";
import { Component } from "react";
import "./styles.scss";

class MovieCard extends Component {
  render() {
    const movie = this.props.movie;
    return (
      <div className="container__movie">
        <img className="container__movie__image" src={movie.image} alt="" />
        <div className="container__movie__name">
          <p>{movie.name}</p>
          <p>{movie.year}</p>
        </div>
        <p className="container__movie__category">{movie.category}</p>
      </div>
    );
  }
}

export default MovieCard;
