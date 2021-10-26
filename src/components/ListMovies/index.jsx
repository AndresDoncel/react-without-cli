import React, { Component } from "react";
import { MovieCard } from "../MovieCard";
import ErrorBoundary from "../ErrorBundary";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./styles.scss";
import {
  retrieveMovies,
  findMoviesByGender,
  sortMoviesByOrder,
} from "../../actions/movies";
import { FilterBar } from "../FilterBar";

class ListMovies extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.retrieveMovies();
  }

  onCategorySelect = (cat) => {
    if (cat.id === "all") {
      this.props.retrieveMovies();
    } else {
      this.props.findMoviesByGender(cat.label);
    }
  };

  onOrderSelected = (optionSelected) => {
    const sortBy = optionSelected.value;
    const sortOrder = optionSelected.value === "vote_average" ? "desc" : "asc";
    this.props.sortMoviesByOrder(sortBy, sortOrder);
  };

  render() {
    const { movies } = this.props;
    return (
      <ErrorBoundary>
        <FilterBar
          onFilterSelected={this.onOrderSelected}
          onCategorySelect={this.onCategorySelect}
        />
        <div className="container__movies">
          {movies.map((movie) => {
            return (
              <MovieCard
                onMovieSelect={this.props.onMovieSelect}
                key={movie.id}
                movie={movie}
              />
            );
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

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps, {
  retrieveMovies,
  findMoviesByGender,
  sortMoviesByOrder,
})(ListMovies);
