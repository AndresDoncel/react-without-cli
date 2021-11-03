import http from "../http-common";

class MovieDataService {
  getAll() {
    return http.get("/movies");
  }

  get(id) {
    return http.get(`/movies/${id}`);
  }

  findByGender(gender) {
    return http.get(`/movies?searchBy=genres&filter=${gender}`);
  }

  sortByOrder(sortBy, sortOrder) {
    return http.get(`/movies?sortBy=${sortBy}&sortOrder=${sortOrder}`);
  }

  create(data) {
    return http.post("/movies", data);
  }

  update(data) {
    return http.put(`/movies`, data);
  }

  delete(id) {
    return http.delete(`/movies/${id}`);
  }
}

export default new MovieDataService();
