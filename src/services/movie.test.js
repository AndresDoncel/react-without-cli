import axios from "axios";
import movieService from "./movie.service";

jest.mock("axios");

test("should fetch movies", () => {
  const movies = [{ title: "movie1" }];
  const resp = { data: [{ title: "movie1" }] };
  axios.get.mockResolvedValue(resp);

  return movieService.getMovies().then((data) => expect(data).anything);
});

test("should fetch a movie by Id", () => {
  const movie = [{ id: "1" }];
  const resp = [{ id: "1" }];
  axios.get.mockResolvedValue(resp);

  return movieService.get().then((data) => expect(data).toEqual(movie));
});

test("should find By Gender", () => {
  const gender = "Comedy";
  const movie = [{ title: "Movie1" }];
  const resp = [{ title: "Movie1" }];
  axios.get.mockResolvedValue(resp);

  return movieService
    .findByGender(gender)
    .then((data) => expect(data).toEqual(movie));
});

test("should sort By Order", () => {
  const sortBy = "vote_avarage";
  const sortOrder = "desc";
  const movie = [{ title: "Movie1" }];
  const resp = [{ title: "Movie1" }];
  axios.get.mockResolvedValue(resp);

  return movieService
    .sortByOrder(sortBy, sortOrder)
    .then((data) => expect(data).toEqual(movie));
});

test("should create a movie", () => {
  const movieToCreate = [{ title: "Movie1" }];
  const resp = [{ title: "Movie1" }];
  axios.post.mockResolvedValue(resp);

  return movieService
    .create(movieToCreate)
    .then((data) => expect(data).toEqual(movieToCreate));
});

test("should update a movie", () => {
  const movieToUpdate = [{ title: "Movie1" }];
  const resp = [{ title: "Movie1" }];
  axios.put.mockResolvedValue(resp);

  return movieService
    .update(movieToUpdate)
    .then((data) => expect(data).toEqual(movieToUpdate));
});

test("should delete a movie", () => {
  const movieToDelete = "123456";
  const resp = "123456";
  axios.delete.mockResolvedValue(resp);

  return movieService
    .delete(movieToDelete)
    .then((data) => expect(data).toEqual(movieToDelete));
});
