import React, { Fragment, useState, useCallback } from "react";
import "./styles.scss";
import { FaEllipsisV } from "react-icons/fa";

export const MovieCard = ({
  movie,
  onMovieSelect,
  onEditMovie,
  onDeleteMovie,
}) => {
  const [showOptionsCard, setShowOptionsCard] = useState(false);

  const showModalOptions = () => {
    setShowOptionsCard(true);
  };

  const hideModalOptions = () => {
    setShowOptionsCard(false);
  };

  const handleClick = useCallback(() => {
    onMovieSelect(movie);
  }, []);

  return (
    <Fragment>
      <div className="container__movie">
        {!showOptionsCard && (
          <div className="container__movie__options">
            <FaEllipsisV onClick={showModalOptions} />
          </div>
        )}

        {showOptionsCard && (
          <div className="options__modal">
            <div onClick={hideModalOptions} className="button_close_modal">
              X
            </div>
            <div className="action_modal" onClick={() => onEditMovie(movie)}>
              Edit
            </div>
            <div className="action_modal" onClick={() => onDeleteMovie(movie)}>
              Delete
            </div>
          </div>
        )}
        <img
          onClick={() => {
            handleClick(movie);
          }}
          className="container__movie__image"
          src={movie.poster_path}
          alt=""
        />
        <div className="container__movie__name">
          <p>{movie.title}</p>
          <p>{new Date(movie.release_date).getFullYear()}</p>
        </div>
        <p className="container__movie__category">
          {movie.genres.map((g) => {
            return <span>{g}, </span>;
          })}
        </p>
      </div>
    </Fragment>
  );
};
