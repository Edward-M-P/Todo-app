import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, inputErrorTrue, inputErrorFalse } from "../actions";
import LoadingSpinner from "../UI/LoadingSpinner";

class AddTodo extends Component {
  state = { input: "" };

  updateInput = (input) => {
    this.setState({ input });
  };

  handleAdd = () => {
    if (this.state.input.length === 0) {
      this.props.inputErrorTrue();
      return;
    } else if (this.state.input.length >= 38) {
      this.props.inputErrorTrue();
      return;
    } else if (this.state.input.trim().length === 0) {
      this.props.inputErrorTrue();
      return;
    }
    this.props.inputErrorFalse();
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    const loading = this.props.isLoadingData;
    const error = this.props.inputError;
    return (
      <div className="card">
        <div className="center">
          <input
            onChange={(e) => this.updateInput(e.target.value)}
            value={this.state.input}
          />
          {!loading && (
            <button className="add-todo btn" onClick={this.handleAdd}>
              Add todo
            </button>
          )}
          {loading && <LoadingSpinner />}
        </div>
        {error && (
          <p className="input-error">
            Input must be between 1 and 36 characters in length, and must not be
            blank.
          </p>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({
  inputError = false,
  data = {},
  isLoadingData = false,
}) => ({
  isLoadingData,
  inputError, //
});
export default connect(mapStateToProps, {
  addTodo,
  inputErrorTrue,
  inputErrorFalse,
})(AddTodo);
