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

  sortByOrder(type) {
    return http.get(`/movies?sortOrder=${type}`);
  }
}

export default new MovieDataService();
