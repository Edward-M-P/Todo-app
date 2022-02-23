describe("TODO Service", () => {
  it("getTodos should be able to get todos from repository", async () => {
    const expected = {
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
    const todoRepository = {
      getTodos: async () => Promise.resolve(expected),
    };

    const todoService = require("../../src/service/todo")(todoRepository);
    const actual = await todoService.getTodos();
    expect(actual).toBeDefined();
    expect(actual).toEqual(expected);
  });

  it("newTodo should be able to submit a todo and recieve a new list with that todo added", async () => {
    newTodo = {
      task: "This todo has just been added!!",
      id: 3,
    };

    const expected = {
      todos: [
        {
          task: "This is a todo example!!",
          id: 1,
        },
        {
          task: "This is another todo example!!",
          id: 2,
        },
        {
          task: "This todo has just been added!!",
          id: 3,
        },
      ],
    };

    const todoRepository = {
      addNewTodo: async () => Promise.resolve(expected),
    };

    const todoService = require("../../src/service/todo")(todoRepository);
    const actual = await todoService.newTodo(newTodo);
    expect(actual).toBeDefined();
    expect(actual).toEqual(expected);
  });

  it("replaceTodosList should be able to submit a new todolist to the repository and recieve that new list back", async () => {
    const newTodoList = {
      todos: [
        {
          task: "Finish jest testing",
          id: 123,
        },
        {
          task: "Make Lunch",
          id: 221,
        },
        {
          task: "Walk the dog",
          id: 13,
        },
      ],
    };

    const expected = {
      todos: [
        {
          task: "Finish jest testing",
          id: 123,
        },
        {
          task: "Make Lunch",
          id: 221,
        },
        {
          task: "Walk the dog",
          id: 13,
        },
      ],
    };

    const todoRepository = {
      overwriteTodoList: async () => Promise.resolve(expected),
    };

    const todoService = require("../../src/service/todo")(todoRepository);
    const actual = await todoService.replaceTodosList(newTodoList);
    expect(actual).toBeDefined();
    expect(actual).toEqual(expected);
  });
});
