import React, { useState, useCallback } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import "./styles.scss";

export const FilterBar = ({ onCategorySelect, onOrderSelect }) => {
  const [categorySelected, setCategorySelected] = useState("all");
  const [orderSelected, setOrderSelected] = useState("desc");

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

  const handleCategorySelected = useCallback((category) => {
    setCategorySelected(category);
    onCategorySelect(category);
  }, []);

  const handleOrderSelected = useCallback((order) => {
    setOrderSelected(order);
    onOrderSelect(order);
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
      <div className="container__filter__sort">
        <span>Sort by</span>
        <p
          onClick={() => {
            handleOrderSelected(orderSelected === "desc" ? "asc" : "desc");
          }}
        >
          release date
          <span>
            {orderSelected === "desc" ? <FaArrowUp /> : <FaArrowDown />}
          </span>
        </p>
      </div>
    </div>
  );
};
