import React from "react";
import "./styles.scss";

export const FilterBar = () => {
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

  return (
    <div className="container__filter">
      <div className="container__filter__options">
        {categoryMovies.map((item) => {
          return <p key={item.id}>{item.label}</p>;
        })}
      </div>
      <div className="container__filter__sort">
        <span>Sort by</span>
        <p>release date</p>
      </div>
    </div>
  );
};
