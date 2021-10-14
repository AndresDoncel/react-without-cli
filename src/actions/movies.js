import { RETRIEVE_MOVIES } from "./types";

import MovieDataService from "../services/movie.service";

export const retrieveMovies = () => async (dispatch) => {
  try {
    const res = await MovieDataService.getAll();
    dispatch({
      type: RETRIEVE_MOVIES,
      payload: res.data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const findMoviesByGender = (gender) => async (dispatch) => {
  try {
    const res = await MovieDataService.findByGender(gender);

    dispatch({
      type: RETRIEVE_MOVIES,
      payload: res.data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const sortMoviesByOrder = (order) => async (dispatch) => {
  try {
    const res = await MovieDataService.sortByOrder(order);

    dispatch({
      type: RETRIEVE_MOVIES,
      payload: res.data.data,
    });
  } catch (err) {
    console.log(err);
  }
};
