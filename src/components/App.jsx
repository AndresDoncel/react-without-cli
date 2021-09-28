import React, { Component } from "react";
import Header from "./Header";
import FilterBar from "./FilterBar";
import ListMovies from "./ListMovies";
import Footer from "./Footer";

import "./global.scss";

class App extends Component {
  render() {
    return (
      <div className="container_app">
        <Header />
        <FilterBar />
        <ListMovies />
        <Footer />
      </div>
    );
  }
}

export default App;
