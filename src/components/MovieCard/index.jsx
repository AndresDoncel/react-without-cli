import React, { Fragment, useState, useCallback } from "react";
import "./styles.scss";
import { FaEllipsisV } from "react-icons/fa";
import { ModalDelete } from "../ModalDelete";
import { Modal } from "../Modal";
import FormAddMovie from "../FormAddMovie";

export const MovieCard = ({ movie, onMovieSelect }) => {
  const [showOptionsCard, setShowOptionsCard] = useState(false);
  const [showModalDeleteMovie, setShowModalDeleteMovie] = useState(false);
  const [showModalEditMovie, setShowModalEditMovie] = useState(false);

  const showModalOptions = () => {
    setShowOptionsCard(true);
  };

  const hideModalOptions = () => {
    setShowOptionsCard(false);
  };

  const showModalDelete = () => {
    setShowModalDeleteMovie(true);
  };

  const hideModalDelete = () => {
    setShowModalDeleteMovie(false);
  };

  const showModalEdit = () => {
    setShowModalEditMovie(true);
  };

  const hideModalEdit = () => {
    setShowModalEditMovie(false);
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
            <div className="action_modal" onClick={showModalEdit}>
              Edit
            </div>
            <div className="action_modal" onClick={showModalDelete}>
              Delete
            </div>
          </div>
        )}
        <img
          onClick={() => {
            handleClick(movie);
          }}
          className="container__movie__image"
          src={movie.image}
          alt=""
        />
        <div className="container__movie__name">
          <p>{movie.name}</p>
          <p>{movie.year}</p>
        </div>
        <p className="container__movie__category">{movie.category}</p>
      </div>
      <Modal
        title="Edit movie"
        show={showModalEditMovie}
        handleClose={hideModalEdit}
      >
        <FormAddMovie></FormAddMovie>
      </Modal>
      <ModalDelete
        title="Delete movie"
        description="Are you sure you want to delete this movie?"
        show={showModalDeleteMovie}
        handleClose={hideModalDelete}
      ></ModalDelete>
    </Fragment>
  );
};
