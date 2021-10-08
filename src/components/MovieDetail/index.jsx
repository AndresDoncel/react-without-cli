import React from "react";
import { FaSearch } from "react-icons/fa";
import "./styles.scss";

export const MovieDetail = ({ app, selectedMovie, onSearchSelect }) => {
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
          <img src={selectedMovie.image} alt="" />
          <div className="container__detail__movie__info__detail">
            <div className="container_name">
              <h1>{selectedMovie.name}</h1>
              <div className="rate">{selectedMovie.rating}</div>
            </div>
            <p className="category">{selectedMovie.category}</p>
            <div className="container_duration">
              <span>{selectedMovie.year}</span>
              <span>{selectedMovie.duration}</span>
            </div>
            <p className="sinopsis">{selectedMovie.sinopsis}</p>
          </div>
        </div>
      </div>
      <div className="space__movie__detail"></div>
    </React.Fragment>
  );
};
