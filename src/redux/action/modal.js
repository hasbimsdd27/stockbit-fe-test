import { HIDE_MODAL, SHOW_MODAL } from "../constants";

export const showModal = (payload) => (dispatch) => {
  dispatch({
    type: SHOW_MODAL,
    payload,
  });
};

export const hideModal = () => (dispatch) => {
  dispatch({
    type: HIDE_MODAL,
  });
};
