import { createStore } from "redux";
import todoReducer from "../reducers/todo_reducer.js";

const configureStore = (preloadedState = {}) => {
  return createStore(
    todoReducer,
    preloadedState
  );
};

export default configureStore;
