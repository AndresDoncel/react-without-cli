import React from "react";
import { Component } from "react";
import MovieCard from "../MovieCard";
import "./styles.scss";

const movies = [
  {
    id: "pulp",
    name: "Pulp Fiction",
    category: "Action & Adventure",
    year: "2004",
    image: "https://es.web.img3.acsta.net/pictures/18/05/21/12/50/1518397.jpg",
  },
  {
    id: "pulp",
    name: "Pulp Fiction",
    category: "Action & Adventure",
    year: "2004",
    image: "https://es.web.img3.acsta.net/pictures/18/05/21/12/50/1518397.jpg",
  },
  {
    id: "bohemia",
    name: "Bohemian Rhapsody",
    category: "Drama, Biography, Music",
    year: "2003",
    image: "https://es.web.img3.acsta.net/pictures/18/05/21/12/50/1518397.jpg",
  },
  {
    id: "kill",
    name: "Kill Bill: Vol 2",
    category: "Oscar winning Movie",
    year: "1994",
    image: "https://es.web.img3.acsta.net/pictures/18/05/21/12/50/1518397.jpg",
  },
  {
    id: "bohemia",
    name: "Bohemian Rhapsody",
    category: "Drama, Biography, Music",
    year: "2003",
    image: "https://es.web.img3.acsta.net/pictures/18/05/21/12/50/1518397.jpg",
  },
  {
    id: "bohemia",
    name: "Bohemian Rhapsody",
    category: "Drama, Biography, Music",
    year: "2003",
    image: "https://es.web.img3.acsta.net/pictures/18/05/21/12/50/1518397.jpg",
  },
  {
    id: "bohemia",
    name: "Bohemian Rhapsody",
    category: "Drama, Biography, Music",
    year: "2003",
    image: "https://es.web.img3.acsta.net/pictures/18/05/21/12/50/1518397.jpg",
  },
  {
    id: "bohemia",
    name: "Bohemian Rhapsody",
    category: "Drama, Biography, Music",
    year: "2003",
    image: "https://es.web.img3.acsta.net/pictures/18/05/21/12/50/1518397.jpg",
  },
  {
    id: "bohemia",
    name: "Bohemian Rhapsody",
    category: "Drama, Biography, Music",
    year: "2003",
    image: "https://es.web.img3.acsta.net/pictures/18/05/21/12/50/1518397.jpg",
  },
];

class ListMovies extends Component {
  render() {
    return (
      <div className="container__movies">
        {movies.map((movie, index) => {
          return <MovieCard key={index} movie={movie} />;
        })}
      </div>
    );
  }
}

export default ListMovies;
