import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../actions";

const Todo = (props) => {
  const deleteHandler = () => {
    props.deleteTodo(props.id);
  };

  return (
    <div className="card">
      <li className="todo-item">
        <span className="todo-item__text">{props.todo}</span>
      </li>
      <div className="actions">
        <button className="btn--alt" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = ({ state }) => ({});
export default connect(mapStateToProps, {
  deleteTodo,
})(Todo);
