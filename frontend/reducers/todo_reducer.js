import React from "react";
import { merge } from "lodash";

import { RECEIVE_TODOS,
          RECEIVE_TODO,
          REMOVE_TODO } from "../actions/todo_actions";

const todoReducer = (oldState = {}, action) => {
  let newState;

  switch (action.type) {
    case RECEIVE_TODOS:
      newState = {};
      action.todos.forEach(todo => {
        newState[todo.id] = todo;
      });
      return newState;
    case RECEIVE_TODO:
      newState = {[action.todo.id]: action.todo};
      return merge({}, oldState, newState);
    case REMOVE_TODO:
      newState = merge({}, oldState);
      delete newState[action.todo.id];
      return newState;
    default:
      return oldState;
  }
};

export default todoReducer;
