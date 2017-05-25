import React, { Component } from "react";
import { connect } from "react-redux";

import { receiveTodos, receiveSingleTodo } from "../../actions/todo_actions";

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos } = this.props;
    debugger
    const todoItems = todos.map( (todo) => <li>{ todo.id }</li>);

    return(
      <ul>
        { todoItems }
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  const todoIds = Object.keys(state);
  const todos = todoIds.map( (todoId) => state[todoId]);

  return ({
    todos
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    receiveTodos: () => dispatch(receiveTodos()),
    receiveSingleTodo: (todo) => (dispatch(receiveSingleTodo(todo)))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
