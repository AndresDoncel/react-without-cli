import React from "react";
import { Component } from "react";
import ErrorBoundary from "../ErrorBundary";
import "./styles.scss";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const customStyles = {
  control: (base) => ({
    ...base,
    height: 57,
    minHeight: 57,
    backgroundColor: "#323232",
    color: "#fff",
  }),
};

class FormAddMovie extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ErrorBoundary>
        <div className="container__form">
          <form action="">
            <div className="row__form">
              <div className="container__input input__left">
                <label>TITLE</label>
                <input type="text" />
              </div>
              <div className="container__input input__rigth">
                <label>RELEASE DATE</label>
                <input type="date" />
              </div>
            </div>
            <div className="row__form">
              <div className="container__input input__left">
                <label>MOVIE URL</label>
                <input type="text" />
              </div>
              <div className="container__input input__rigth">
                <label>RATING</label>
                <input type="text" />
              </div>
            </div>
            <div className="row__form">
              <div className="container__input input__left">
                <label>genre</label>
                <Select
                  styles={customStyles}
                  classNamePrefix="filter"
                  placeholder="Select a gender"
                  options={options}
                />
              </div>
              <div className="container__input input__rigth">
                <label>RUNTIME</label>
                <input type="text" />
              </div>
            </div>
            <div className="row__form">
              <div className="container__textarea">
                <label>OVERVIEW</label>
                <textarea id="overview" name="overview"></textarea>
              </div>
            </div>

            <div className="container__actions__form">
              <button className="reset__button">RESET</button>
              <button className="submit__button">submit</button>
            </div>
          </form>
        </div>
      </ErrorBoundary>
    );
  }
}

export default FormAddMovie;
