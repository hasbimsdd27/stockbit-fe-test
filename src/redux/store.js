import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import movies from "./reducer/movies";
import modal from "./reducer/modal";

const rootReducers = combineReducers({
  movies,
  modal,
});

const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
