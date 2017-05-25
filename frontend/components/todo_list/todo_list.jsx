import React, { Component } from "react";
import { connect } from "react-redux";

import { receiveTodos, receiveSingleTodo } from "../../actions/todo_actions";
import TodoForm from "./todo_form";

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos } = this.props;
    const todoItems = todos.map( (todo) => (
      <li key={ todo.id }>{ todo.title }</li>
    ));

    return(
      <div>
        <ul>
          { todoItems }
        </ul>

        <TodoForm receiveSingleTodo={ this.props.receiveSingleTodo }/>
      </div>
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
