import {
  INITIAL_DATA,
  LOADING_SEARCH,
  ADD_PAGE,
  ADD_MORE_MOVIES,
} from "../constants";

export const initialData = (payload) => (dispatch) => {
  dispatch({
    type: INITIAL_DATA,
    payload,
  });
};

export const loadingSearch = (payload) => (dispatch) => {
  dispatch({
    type: LOADING_SEARCH,
    payload,
  });
};

export const addPage = (payload) => (dispatch) => {
  dispatch({
    type: ADD_PAGE,
  });
};

export const addMoreMovies = (payload) => (dispatch) => {
  dispatch({
    type: ADD_MORE_MOVIES,
    payload,
  });
};
