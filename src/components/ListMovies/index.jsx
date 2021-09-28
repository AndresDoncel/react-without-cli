import React from "react";
import { Component } from "react";
import MovieCard from "../MovieCard";
import ErrorBoundary from "../ErrorBundary";
import PropTypes from "prop-types";
import "./styles.scss";

const movies = [
  {
    id: "1",
    name: "Pulp Fiction",
    category: "Action & Adventure",
    year: "2004",
    image: "https://es.web.img3.acsta.net/pictures/18/05/21/12/50/1518397.jpg",
  },
  {
    id: "2",
    name: "Pulp Fiction",
    category: "Action & Adventure",
    year: "2004",
    image: "https://es.web.img3.acsta.net/pictures/18/05/21/12/50/1518397.jpg",
  },
  {
    id: "3",
    name: "Bohemian Rhapsody",
    category: "Drama, Biography, Music",
    year: "2003",
    image: "https://es.web.img3.acsta.net/pictures/18/05/21/12/50/1518397.jpg",
  },
  {
    id: "4",
    name: "Kill Bill: Vol 2",
    category: "Oscar winning Movie",
    year: "1994",
    image: "https://es.web.img3.acsta.net/pictures/18/05/21/12/50/1518397.jpg",
  },
  {
    id: "5",
    name: "Bohemian Rhapsody",
    category: "Drama, Biography, Music",
    year: "2003",
    image: "https://es.web.img3.acsta.net/pictures/18/05/21/12/50/1518397.jpg",
  },
  {
    id: "6",
    name: "Bohemian Rhapsody",
    category: "Drama, Biography, Music",
    year: "2003",
    image: "https://es.web.img3.acsta.net/pictures/18/05/21/12/50/1518397.jpg",
  },
  {
    id: "7",
    name: "Bohemian Rhapsody",
    category: "Drama, Biography, Music",
    year: "2003",
    image: "https://es.web.img3.acsta.net/pictures/18/05/21/12/50/1518397.jpg",
  },
  {
    id: "8",
    name: "Bohemian Rhapsody",
    category: "Drama, Biography, Music",
    year: "2003",
    image: "https://es.web.img3.acsta.net/pictures/18/05/21/12/50/1518397.jpg",
  },
  {
    id: "9",
    name: "Bohemian Rhapsody",
    category: "Drama, Biography, Music",
    year: "2003",
    image: "https://es.web.img3.acsta.net/pictures/18/05/21/12/50/1518397.jpg",
  },
];

class ListMovies extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  render() {
    return (
      <ErrorBoundary>
        <div className="container__movies">
          {movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </div>
      </ErrorBoundary>
    );
  }
}

ListMovies.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  category: PropTypes.string,
  year: PropTypes.string,
  image: PropTypes.string,
};

export default ListMovies;
