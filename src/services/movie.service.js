import axios from "axios";

class MovieDataService {
  getMovies(searchQuery, genreQuery, sortByQuery) {
    const searchBy = genreQuery ? "genres" : "title";
    const filter = genreQuery ? genreQuery : "";
    return axios.get(
      `/movies?search=${searchQuery}&searchBy=${searchBy}&filter=${filter}&sortBy=${sortByQuery}`
    );
  }

  get(id) {
    return axios.get(`/movies/${id}`);
  }

  findByGender(gender) {
    return axios.get(`/movies?searchBy=genres&filter=${gender}`);
  }

  sortByOrder(sortBy, sortOrder) {
    return axios.get(`/movies?sortBy=${sortBy}&sortOrder=${sortOrder}`);
  }

  create(data) {
    return axios.post("/movies", data);
  }

  update(data) {
    return axios.put(`/movies`, data);
  }

  delete(id) {
    return axios.delete(`/movies/${id}`);
  }
}

export default new MovieDataService();
