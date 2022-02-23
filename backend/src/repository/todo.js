let todoList = {
  todos: [
    {
      task: "This is a todo example!!",
      id: 1,
    },
    {
      task: "This is another todo example!!",
      id: 2,
    },
  ],
};

function addNewTodo(todo) {
  todoList.todos.push(todo);
  return Promise.resolve(todoList);
}

function overwriteTodoList(newTodoList) {
  todoList.todos = newTodoList.todos;
  return Promise.resolve(todoList);
}

module.exports = {
  getTodos: () => Promise.resolve(todoList),
  addNewTodo,
  overwriteTodoList,
};
