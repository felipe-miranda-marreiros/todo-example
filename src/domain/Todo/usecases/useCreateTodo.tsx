import { useState, ChangeEvent } from "react";
import { todoService } from "../todoService";

export function useCreateTodo() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [todo, setTodo] = useState("");

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setTodo(e.target.value);
  }

  function onToggle() {
    setIsCompleted((prevState) => !prevState);
  }

  async function onCreateTodo() {
    try {
      setIsLoading(true);
      await todoService.createTodo({
        isCompleted: isCompleted,
        name: todo,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    todo,
    onCreateTodo,
    onChange,
    onToggle,
  };
}
