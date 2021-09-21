import React from "react";
import { Component } from "react";
import "./styles.scss";

const categoryMovies = [
  {
    id: "all",
    label: "All",
  },
  {
    id: "documentary",
    label: "Documentary",
  },
  {
    id: "comedy",
    label: "Comedy",
  },
  {
    id: "horror",
    label: "Horror",
  },
  {
    id: "crime",
    label: "Crime",
  },
];

class FilterBar extends Component {
  render() {
    return (
      <div className="container__filter">
        <div className="container__filter__options">
          {categoryMovies.map((item, index) => {
            return <p key={index}>{item.label}</p>;
          })}
        </div>
        <div className="container__filter__sort">
          <span>Sort by</span>
          <p>release date</p>
        </div>
      </div>
    );
  }
}

export default FilterBar;
