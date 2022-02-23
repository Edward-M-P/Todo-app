import React, { Component } from "react";
import Todo from "./Todo";
import { fetchTodos } from "../actions";
import { connect } from "react-redux";

class TodoList extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { todos } = this.props.data;
    return (
      <ul className="todo-list">
        {todos && todos.length ? (
          todos.map((todo, index) => {
            return <Todo key={todo.id} todo={todo.task} id={todo.id} />;
          })
        ) : (
          <div className="card">No todos, yay!</div>
        )}
      </ul>
    );
  }
}

const mapStateToProps = ({ data = {}, isLoadingData = false }) => ({
  data,
  isLoadingData, //
});
export default connect(mapStateToProps, {
  fetchTodos,
})(TodoList);
