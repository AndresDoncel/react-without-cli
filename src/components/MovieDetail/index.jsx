import React from "react";
import { FaSearch } from "react-icons/fa";
import "./styles.scss";

export const MovieDetail = ({ app, selectedMovie, onSearchSelect }) => {
  console.log("selectedMovie", selectedMovie);
  return (
    <React.Fragment>
      <div className="container__detail__movie">
        <div className="container__detail__movie__search">
          <p>
            {app.title}
            <span>{app.subtitle}</span>
          </p>
          <FaSearch
            onClick={() => {
              onSearchSelect();
            }}
          />
        </div>
        <div className="container__detail__movie__info">
          <img src={selectedMovie.poster_path} alt="" />
          <div className="container__detail__movie__info__detail">
            <div className="container_name">
              <h1>{selectedMovie.title}</h1>
              <div className="rate">{selectedMovie.vote_average}</div>
            </div>
            <p className="category">
              {selectedMovie.genres.map((g) => {
                return <span>{g} </span>;
              })}
            </p>
            <div className="container_duration">
              <span>{new Date(selectedMovie.release_date).getFullYear()}</span>
              <span>{selectedMovie.runtime}</span>
            </div>
            <p className="sinopsis">{selectedMovie.overview}</p>
          </div>
        </div>
      </div>
      <div className="space__movie__detail"></div>
    </React.Fragment>
  );
};
