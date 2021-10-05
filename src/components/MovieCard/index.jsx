import React, { Fragment } from "react";
import { Component } from "react";
import "./styles.scss";
import { FaEllipsisV } from "react-icons/fa";
import { ModalDelete } from "../ModalDelete";
import { Modal } from "../Modal";
import FormAddMovie from "../FormAddMovie";

class MovieCard extends Component {
  constructor() {
    super();
    this.state = {
      showOptionsCard: false,
      showModalDeleteMovie: false,
      showModalEditMovie: false,
    };
  }

  showModalOptions = () => {
    this.setState({ showOptionsCard: true });
  };

  hideModalOptions = () => {
    this.setState({ showOptionsCard: false });
  };

  showModalDelete = () => {
    this.setState({ showModalDeleteMovie: true });
  };

  hideModalDelete = () => {
    this.setState({ showModalDeleteMovie: false });
  };

  showModalEdit = () => {
    this.setState({ showModalEditMovie: true });
  };

  hideModalEdit = () => {
    this.setState({ showModalEditMovie: false });
  };

  render() {
    const movie = this.props.movie;
    return (
      <Fragment>
        <div className="container__movie">
          {!this.state.showOptionsCard && (
            <div className="container__movie__options">
              <FaEllipsisV onClick={this.showModalOptions} />
            </div>
          )}

          {this.state.showOptionsCard && (
            <div className="options__modal">
              <div
                onClick={this.hideModalOptions}
                className="button_close_modal"
              >
                X
              </div>
              <div className="action_modal" onClick={this.showModalEdit}>
                Edit
              </div>
              <div className="action_modal" onClick={this.showModalDelete}>
                Delete
              </div>
            </div>
          )}
          <img className="container__movie__image" src={movie.image} alt="" />
          <div className="container__movie__name">
            <p>{movie.name}</p>
            <p>{movie.year}</p>
          </div>
          <p className="container__movie__category">{movie.category}</p>
        </div>
        <Modal
          title="Edit movie"
          show={this.state.showModalEditMovie}
          handleClose={this.hideModalEdit}
        >
          <FormAddMovie></FormAddMovie>
        </Modal>
        <ModalDelete
          title="Delete movie"
          description="Are you sure you want to delete this movie?"
          show={this.state.showModalDeleteMovie}
          handleClose={this.hideModalDelete}
        ></ModalDelete>
      </Fragment>
    );
  }
}

export default MovieCard;
