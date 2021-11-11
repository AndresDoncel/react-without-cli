import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./styles.scss";
import MovieDataService from "../../services/movie.service";

export const MovieDetail = ({ app, movieId, onSearchSelect }) => {
  const [movie, setMovie] = useState({});

  useEffect(async () => {
    const movie = await MovieDataService.get(movieId);
    setMovie(movie.data);
  }, []);

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
          <img src={movie.poster_path} alt="" />
          <div className="container__detail__movie__info__detail">
            <div className="container_name">
              <h1>{movie.title}</h1>
              <div className="rate">{movie.vote_average}</div>
            </div>
            {/* <p className="category">
              {movie.genres.map((g) => {
                return <span>{g} </span>;
              })}
            </p> */}
            <div className="container_duration">
              <span>{new Date(movie.release_date).getFullYear()}</span>
              <span>{movie.runtime}</span>
            </div>
            <p className="sinopsis">{movie.overview}</p>
          </div>
        </div>
      </div>
      <div className="space__movie__detail"></div>
    </React.Fragment>
  );
};
