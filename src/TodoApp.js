import React from "react";
import TodoList from "./component/TodoList";
import "./styles.css";
import AddTodo from "./component/AddTodo";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <header className="header">
        <h1>Edward's Todo List:</h1>
      </header>
      <div className="center">
        <AddTodo />
      </div>
      <div className="center">
        <TodoList />
      </div>
    </div>
  );
}
