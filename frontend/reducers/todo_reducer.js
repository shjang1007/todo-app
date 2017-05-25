import React from "react";
import { merge } from "lodash";

import { RECEIVE_TODOS,
          RECEIVE_TODO,
          REMOVE_TODO } from "../actions/todo_actions";

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const todoReducer = (oldState = initialState, action) => {
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
