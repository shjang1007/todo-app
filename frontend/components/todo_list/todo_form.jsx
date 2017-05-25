import React, { Component } from "react";
import { merge } from "lodash";

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      done: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return (e) => {
      return (
        this.setState({[property]: e.target.value})
      );
    };
  }

handleSubmit(e) {
  e.preventDefault();
  const todo = merge({}, this.state, { id: new Date().getTime() });
  this.props.receiveTodo(todo);
  this.setState({
    title: "",
    description: ""
  });
}

  render() {
    return (
      <form className="todo-form" onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title:
          <input name="title"
                className="input"
                value={this.state.title}
                placeholder="Enter a todo"
                onChange={this.update("title")}
                required/>
        </label>
        <label htmlFor="description">Description:
          <textarea name="description"
            className="input"
            cols="18"
            rows="4"
            value={this.state.description}
            placeholder="Enter description on a todo"
            onChange={this.update("description")}></textarea>
        </label>
        <button className="create-button">Create Todo</button>
      </form>
    );
  }
}

export default TodoForm;
