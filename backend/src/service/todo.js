const todoService = (repository) => {
  return {
    getTodos: async () => {
      return await repository.getTodos();
    },
    newTodo: async (todo) => {
      return await repository.addNewTodo(todo);
    },
    replaceTodosList: async (newlist) => {
      return await repository.overwriteTodoList(newlist);
    },
  };
};

module.exports = todoService;
