import axios from "axios";
import { CreateTodo, Todo } from "./todoTypes";

async function getTodos() {
  const response = await axios.get<Todo[]>("api.com.br/todo-list");
  return response.data;
}

async function createTodo(todo: CreateTodo) {
  await axios.post("api.com.br/todo-list", todo);
}

export const todoApi = {
  getTodos,
  createTodo,
};
