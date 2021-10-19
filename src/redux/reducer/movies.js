import {
  INITIAL_DATA,
  LOADING_SEARCH,
  ADD_PAGE,
  ADD_MORE_MOVIES,
} from "../constants";

const initialState = {
  keyword: "",
  data: [],
  currentPage: 0,
  lastPage: 0,
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIAL_DATA:
      return { ...state, ...action.payload };

    case LOADING_SEARCH:
      return { ...state, ...action.payload };

    case ADD_PAGE:
      return { ...state, currentPage: state.currentPage + 1 };

    case ADD_MORE_MOVIES:
      return { ...state, data: [...state.data, ...action.payload] };

    default:
      return state;
  }
};

export default reducer;
