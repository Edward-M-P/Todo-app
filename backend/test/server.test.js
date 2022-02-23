const request = require("supertest");
const server = require("../src/server");
const app = server();

describe("Testing the GET server endpoints", () => {
  it("GET request should responds with a 200 status code", async () => {
    const response = await request(app).get("/api/todo");
    expect(response.statusCode).toEqual(200);
  });

  it("GET request should return the todo list", async () => {
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

    const response = await request(app).get("/api/todo");
    expect(response.body).toEqual(expected);
  });

  it("GET request response should specify json in the content type header", async () => {
    const response = await request(app).get("/api/todo");
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  });
});

describe("Testing the POST server endpoints", () => {
  it("POST request should respond with a 201 status code", async (done) => {
    const response = await request(app).post("/api/todo").send({
      task: "An example task",
      id: "1000",
    });
    expect(response.statusCode).toEqual(201);
    done();
  });

  it("POST request should respond with the new todo list", async (done) => {
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
          task: "An example task",
          id: "1000",
        },
        {
          task: "This todo has just been added!!",
          id: 3,
        },
      ],
    };
    const response = await request(app).post("/api/todo").send(newTodo);
    expect(response.body).toEqual(expected);
    done();
  });
});

describe("Testing the PUT server endpoints", () => {
  it("PUT request should respond with a 201 status code and return the new todo list", async (done) => {
    const expected = {
      data: {
        todos: [
          { task: "This is another todo example!!", id: 2 },
          { task: "sdddddddd", id: 0.14194984225110652 },
        ],
      },
    };

    const response = await request(app).put("/api/todo").send(expected);
    expect(response.statusCode).toEqual(201);
    expect(response.body).toEqual(expected.data);
    done();
  });
});
