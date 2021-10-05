import React, { Component } from "react";
import Header from "./Header";
import FilterBar from "./FilterBar";
import ListMovies from "./ListMovies";
import Footer from "./Footer";

import "./global.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          id: "1",
          name: "Pulp Fiction",
          category: "Action & Adventure",
          year: "2004",
          image:
            "https://es.web.img3.acsta.net/pictures/18/05/21/12/50/1518397.jpg",
        },
        {
          id: "2",
          name: "Pulp Fiction",
          category: "Action & Adventure",
          year: "2004",
          image:
            "https://es.web.img3.acsta.net/pictures/18/05/21/12/50/1518397.jpg",
        },
        {
          id: "3",
          name: "Bohemian Rhapsody",
          category: "Drama, Biography, Music",
          year: "2003",
          image:
            "https://es.web.img3.acsta.net/pictures/18/05/21/12/50/1518397.jpg",
        },
        {
          id: "4",
          name: "Kill Bill: Vol 2",
          category: "Oscar winning Movie",
          year: "1994",
          image:
            "https://es.web.img3.acsta.net/pictures/18/05/21/12/50/1518397.jpg",
        },
        {
          id: "5",
          name: "Bohemian Rhapsody",
          category: "Drama, Biography, Music",
          year: "2003",
          image:
            "https://es.web.img3.acsta.net/pictures/18/05/21/12/50/1518397.jpg",
        },
        {
          id: "6",
          name: "Bohemian Rhapsody",
          category: "Drama, Biography, Music",
          year: "2003",
          image:
            "https://es.web.img3.acsta.net/pictures/18/05/21/12/50/1518397.jpg",
        },
        {
          id: "7",
          name: "Bohemian Rhapsody",
          category: "Drama, Biography, Music",
          year: "2003",
          image:
            "https://es.web.img3.acsta.net/pictures/18/05/21/12/50/1518397.jpg",
        },
        {
          id: "8",
          name: "Bohemian Rhapsody",
          category: "Drama, Biography, Music",
          year: "2003",
          image:
            "https://es.web.img3.acsta.net/pictures/18/05/21/12/50/1518397.jpg",
        },
        {
          id: "9",
          name: "Bohemian Rhapsody",
          category: "Drama, Biography, Music",
          year: "2003",
          image:
            "https://es.web.img3.acsta.net/pictures/18/05/21/12/50/1518397.jpg",
        },
      ],
      app: { title: "netflix", subtitle: "roulette" },
    };
  }

  componentDidMount() {
    setInterval(() => this.randomBestMovies(), 1000);
  }

  randomBestMovies() {
    this.setState({
      movies: [
        {
          id: "1",
          name: "Pulp Fiction",
          category: "Action & Adventure",
          year: "2004",
          image:
            "https://es.web.img3.acsta.net/pictures/18/05/21/12/50/1518397.jpg",
        },
      ],
    });
  }

  render() {
    const { movies, app } = this.state;
    return (
      <div className="container_app">
        <Header app={app} />
        <FilterBar />
        <ListMovies movies={movies} />
        <Footer />
      </div>
    );
  }
}

export default App;
