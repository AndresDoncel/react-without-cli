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
import { ModalDelete } from "../ModalDelete";
import { Modal } from "../Modal";
import { FormAddMovie } from "../FormAddMovie";
import movieService from "../../services/movie.service";

class ListMovies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModalEdit: false,
      movieSelected: null,
      showModalDeleteMovie: false,
    };

    this.showModalditMovie = this.showModalEditMovie.bind(this);
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

  showModalEditMovie(movie) {
    this.setState({
      showModalEdit: true,
      movieSelected: movie,
    });
  }

  deleteMovie() {
    const movie = this.state.movieSelected;
    movieService
      .delete(movie.id)
      .then(() => {
        this.props.retrieveMovies();
        this.setState({ showModalDeleteMovie: false, movieSelected: null });
        openSnackbar("Movie was deleted successfully");
      })
      .catch((error) => {
        openSnackbar("Movie wasnt deleted successfully");
      });
  }

  onShowModalDeleteMovie(movie) {
    this.setState({
      movieSelected: movie,
      showModalDeleteMovie: true,
    });
  }

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
                onDeleteMovie={(movie) => this.onShowModalDeleteMovie(movie)}
                onEditMovie={(movie) => this.showModalEditMovie(movie)}
                onMovieSelect={this.props.onMovieSelect}
                key={movie.id}
                movie={movie}
              />
            );
          })}
        </div>
        <Modal
          handleClose={() =>
            this.setState({ showModalEdit: false, movieSelected: null })
          }
          title="Edit movie"
          show={this.state.showModalEdit}
        >
          <FormAddMovie
            onCreateMovieSuccess={() => this.hideModalEdit}
            movie={this.state.movieSelected}
          ></FormAddMovie>
        </Modal>
        <ModalDelete
          onConfirm={() => this.deleteMovie()}
          title="Delete movie"
          description="Are you sure you want to delete this movie?"
          show={this.state.showModalDeleteMovie}
          handleClose={() =>
            this.setState({ showModalDeleteMovie: false, movieSelected: null })
          }
        ></ModalDelete>
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
