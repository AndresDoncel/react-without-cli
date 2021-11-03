import React, { useState } from "react";
import "./styles.scss";
import headerBackground from "../../assets/images/bg_header.png";
import { Modal } from "../Modal";
import { FormAddMovie } from "../FormAddMovie";

export const Header = ({ app }) => {
  const [showModal, setShowModal] = useState(false);

  const onShowModal = () => {
    setShowModal(true);
  };

  const hideModal = () => {
    setShowModal(false);
  };

  return (
    <div
      style={{ backgroundImage: `url(${headerBackground})` }}
      className="container__header"
    >
      <div className="container__header__wrapper">
        <div className="container__header__add__movie">
          <p>
            {app.title}
            <span>{app.subtitle}</span>
          </p>
          <Modal title="Add movie" show={showModal} handleClose={hideModal}>
            <FormAddMovie onCreateMovieSuccess={hideModal}></FormAddMovie>
          </Modal>
          <button className="add__movie__button" onClick={onShowModal}>
            + add movie
          </button>
        </div>
        <div className="container__header__title">
          <h1>FIND YOUR MOVIE</h1>
        </div>
        <div className="container__header__search">
          <input placeholder="What do you want to watch?" type="text" />
          <button className="search__movie__button">Search</button>
        </div>
      </div>
    </div>
  );
};
