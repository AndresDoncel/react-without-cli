import React from "react";
import { Component } from "react";
import "./styles.scss";
import headerBackground from "../../assets/images/bg_header.png";
import { Modal } from "../Modal";
import FormAddMovie from "../FormAddMovie";
class Header extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div
        style={{ backgroundImage: `url(${headerBackground})` }}
        className="container__header"
      >
        <div className="container__header__wrapper">
          <div className="container__header__add__movie">
            <p>
              {this.props.app.title}
              <span>{this.props.app.subtitle}</span>
            </p>
            <Modal
              title="Add movie"
              show={this.state.show}
              handleClose={this.hideModal}
            >
              <FormAddMovie></FormAddMovie>
            </Modal>
            <button className="add__movie__button" onClick={this.showModal}>
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
  }
}

export default Header;
