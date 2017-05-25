import React, { Component } from "react";
import { connect } from "react-redux";

import { removeTodo, receiveTodo } from "../../actions/todo_actions";
import TodoForm from "./todo_form";
import TodoListItem from "./todo_list_item";

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos } = this.props;
    const todoItems = todos.map( (todo) => (
      <TodoListItem key={ todo.id }
                  todo={ todo }
                  receiveTodo={ this.props.receiveTodo }
                  removeTodo={ this.props.removeTodo }/>
    ));

    return(
      <div>
        <ul>
          { todoItems }
        </ul>
        <TodoForm receiveTodo={ this.props.receiveTodo }/>
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
    receiveTodo: (todo) => (dispatch(receiveTodo(todo))),
    removeTodo: (todo) => (dispatch(removeTodo(todo)))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
