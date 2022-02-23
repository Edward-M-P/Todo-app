const repository = require("../../src/repository/todo");

describe("TODO repository", () => {
  it("GetTodos should return the todo list", async () => {
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
    const actual = await repository.getTodos();
    expect(actual).toBeDefined();
    expect(actual).toEqual(expected);
  });

  it("addNewTodo should add a new todo to the list", async () => {
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

    const actual = await repository.addNewTodo(newTodo);
    expect(actual).toBeDefined();
    expect(actual).toEqual(expected);
  });

  it("overwriteTodoList should overwrite the old Todo List", async () => {
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

    const actual = await repository.overwriteTodoList(newTodoList);
    expect(actual).toBeDefined();
    expect(actual).toEqual(expected);
  });
});
