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
}

export default new MovieDataService();
