const express = require("express");
const cors = require("cors");
const repository = require("./repository/todo");
const todoService = require("./service/todo")(repository);

const server = () => {
  const server = express();
  server.use(express.json());
  server.use(cors());

  server.get("/api/todo", async (req, res) => {
    console.log("GET request inside server");
    res.status(200).json(await todoService.getTodos());
  });

  server.post("/api/todo", async (req, res) => {
    console.log("POST request inside server");
    const newTodo1 = {
      task: req.body.task,
      id: req.body.id,
    };
    todoService.newTodo(newTodo1);
    res.status(201).json(await todoService.getTodos());
  });

  server.put("/api/todo", async (req, res) => {
    console.log("PUT request in server");
    const newTodos = req.body.data;
    todoService.replaceTodosList(newTodos);
    res.status(201).json(await todoService.getTodos());
  });

  return server;
};
module.exports = server;
