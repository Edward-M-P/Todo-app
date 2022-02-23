import axios from "axios";

import {
  FETCH_TODOS,
  SET_INPUT_ERROR_FALSE,
  SET_LOADING_TRUE,
  SET_INPUT_ERROR_TRUE,
} from "./types";
import {} from "./types"; // added

export function fetchTodos() {
  return function (dispatch) {
    dispatch(setLoadingTrue());
    return axios.get("http://localhost:9091/api/todo").then(({ data }) => {
      dispatch(setTodos(data));
    });
  };
}

export function addTodo(todo) {
  return function (dispatch) {
    dispatch(setLoadingTrue());
    return axios
      .post("http://localhost:9091/api/todo", {
        task: todo,
        id: Math.random(),
      })
      .then(({ data }) => {
        console.log("post - start");
        console.log(data);
        console.log("post - end");
        dispatch(fetchTodos());
      });
  };
}

// get state from back end, update state, send to store
export function deleteTodo(id) {
  return function (dispatch) {
    dispatch(setLoadingTrue());
    return axios.get("http://localhost:9091/api/todo").then(({ data }) => {
      console.log("deleteTodo");
      console.log(data);
      const currentTodoData = data.todos;
      const newTodoData = currentTodoData.filter((todos) => todos.id !== id);
      const newStateData = { todos: newTodoData };
      console.log(newStateData);
      dispatch(updateBackendData(newStateData));
    });
  };
}

export function updateBackendData(data) {
  return function (dispatch) {
    console.log("updateBackendData");
    console.log(data);
    return axios
      .put("http://localhost:9091/api/todo", {
        data,
      })
      .then(() => {
        dispatch(fetchTodos());
      });
  };
}

export function inputErrorTrue() {
  return function (dispatch) {
    dispatch({ type: SET_INPUT_ERROR_TRUE });
  };
}

export function inputErrorFalse() {
  return function (dispatch) {
    dispatch({ type: SET_INPUT_ERROR_FALSE });
  };
}

function setLoadingTrue() {
  return {
    type: SET_LOADING_TRUE,
  };
}

function setTodos(data) {
  console.log("setTodos");
  console.log(data);
  console.log("setTodos/");
  return {
    type: FETCH_TODOS,
    payload: data,
  };
}
