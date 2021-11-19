import moviesReducer from "./movies";

describe("Movies Reducer", () => {
  it("Should return default state", () => {
    const newState = moviesReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it("Should return new state if receiving type", () => {
    const movies = [
      { title: "Movie 1" },
      { title: "Movie 2" },
      { title: "Movie 3" },
    ];
    const newState = moviesReducer(undefined, {
      type: "RETRIEVE_MOVIES",
      payload: movies,
    });

    expect(newState).toEqual(movies);
  });
});
