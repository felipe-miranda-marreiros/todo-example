import { useState, useEffect } from "react";
import { todoService } from "../todoService";
import { Todo } from "../todoTypes";

export function useGetTodos() {
  const [isLoading, setIsLoading] = useState(false);
  const [todo, setTodo] = useState<Todo[]>([]);

  async function getTodos() {
    try {
      setIsLoading(true);
      const response = await todoService.getTodos();
      setTodo(response);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  return {
    isLoading,
    todo,
  };
}
