import React from "react";
import { merge } from "lodash"

import { RECEIVE_TODOS, RECEIVE_SINGLE_TODO } from "../actions/todo_actions";

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
    case RECEIVE_SINGLE_TODO:
      newState = {[action.todo.id]: action.todo};
      return merge({}, oldState, newState);
    default:
      return oldState;
  }
};

export default todoReducer;
