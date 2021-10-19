import { SHOW_MODAL, HIDE_MODAL } from "../constants";

const initialState = {
  isShow: false,
  content: <></>,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, isShow: true, ...action.payload };

    case HIDE_MODAL:
      return { ...state, ...initialState };

    default:
      return state;
  }
};

export default reducer;
