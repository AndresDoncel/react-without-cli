import React, { useState, useCallback, useEffect } from "react";
import "./styles.scss";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

export const FilterBar = ({
  onCategorySelect,
  onFilterSelected,
  genreQuery,
}) => {
  const [categorySelected, setCategorySelected] = useState({
    id: "all",
    label: "all",
  });

  const [optionFilterSelected, setOptionFilterSelected] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    setCategorySelected({
      id: genreQuery,
      label: genreQuery,
    });
  }, []);

  const customStyles = {
    control: (base) => ({
      ...base,
      height: 50,
      minHeight: 50,
      backgroundColor: "transparent",
      border: "none",
      color: "#fff",
    }),
  };

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

  const filterOptions = [
    {
      value: "release_date",
      label: "Relase date",
    },
    {
      value: "vote_average",
      label: "Rating",
    },
  ];

  const handleCategorySelected = useCallback((category) => {
    setCategorySelected(category);
    onCategorySelect(category);
    navigate(`/search/?genre=${category.id}`);
  }, []);

  const handleFilterChange = useCallback((optionSelected) => {
    setOptionFilterSelected(optionSelected);
    onFilterSelected(optionSelected);
  }, []);

  return (
    <div className="container__filter">
      <div className="container__filter__options">
        {categoryMovies.map((item) => {
          return (
            <p
              className={
                "category " +
                (categorySelected.id === item.id ? "selected " : "normal")
              }
              onClick={() => {
                handleCategorySelected(item);
              }}
              key={item.id}
            >
              {item.label}
            </p>
          );
        })}
      </div>
      <div className="container__filter__sort container__input">
        <label>release date</label>
        <Select
          onChange={handleFilterChange}
          styles={customStyles}
          classNamePrefix="filter"
          placeholder="Select a filter"
          options={filterOptions}
        />
      </div>
    </div>
  );
};
