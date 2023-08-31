import { todoApi } from "./todoApi";
import { CreateTodo } from "./todoTypes";

async function getTodos() {
  const response = await todoApi.getTodos();
  return response;
}

async function createTodo(todo: CreateTodo) {
  await todoApi.createTodo(todo);
}

export const todoService = {
  getTodos,
  createTodo,
};
