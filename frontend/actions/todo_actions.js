export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_SINGLE_TODO = "RECEIVE_SINGLE_TODO";

export const receiveTodos = (todos) => {
  return {
    type: RECEIVE_TODOS,
    todos
  };
};

export const receiveSingleTodo = (todo) => {
  return {
    type: RECEIVE_SINGLE_TODO,
    todo
  };
};
