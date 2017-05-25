import React, { Component } from 'react';
import merge from 'lodash/merge';

class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {detail: false};
    this.toggleDetail = this.toggleDetail.bind(this);
    this.toggleDone = this.toggleDone.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  toggleDetail(e) {
    e.preventDefault();
    this.setState({ detail: !this.state.detail });
  }

  toggleDone(e) {
    e.preventDefault();
    const doneToggledTodo = merge(
      {},
      this.props.todo,
      { done: !this.props.todo.done }
    );

     this.props.receiveTodo(doneToggledTodo);
  }

  removeTodo(e) {
    const { todo, removeTodo } = this.props;

    e.preventDefault();

    removeTodo(todo);
  }

  render() {
    const { title, description, done } = this.props.todo;

    let detail;
    if (this.state.detail) {
      detail = (
        <div>
          <p className="todo-description">{ description }</p>
          <button className="delete-button"
                  onClick={ this.removeTodo }>
            Delete Todo
          </button>
        </div>
      );
    }

    return (
      <li className="todo-list-item">
        <div className="todo-header">
          <h3><a onClick={ this.toggleDetail }>{ title }</a></h3>
          <button
            className={ done ? "done" : "undone" }
            onClick={ this.toggleDone }>
            { done ? "Undo" : "Done" }
          </button>
        </div>
        { detail }
      </li>
    );
  }
}

export default TodoListItem;
