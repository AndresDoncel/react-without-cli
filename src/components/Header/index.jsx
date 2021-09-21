import React from "react";
import { Component } from "react";
import "./styles.scss";
import headerBackground from "../../assets/images/bg_header.png";

class Header extends Component {
  render() {
    return (
      <div
        style={{ backgroundImage: `url(${headerBackground})` }}
        className="container__header"
      >
        <div className="container__header__wrapper">
          <div className="container__header__add__movie">
            <p>
              netflix<span>roulette</span>
            </p>
            <button>+ add movie</button>
          </div>
          <div className="container__header__title">
            <h1>FIND YOUR MOVIE</h1>
          </div>
          <div className="container__header__search">
            <input placeholder="What do you want to watch?" type="text" />
            <button>Search</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
