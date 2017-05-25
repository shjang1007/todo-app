import { createStore } from "redux";
import todoReducer from "../reducers/todo_reducer.js";

const configureStore = (preloadedState = {}) => {
  const store =createStore(
    todoReducer,
    preloadedState
  );

  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });

  return store;
};

export default configureStore;
