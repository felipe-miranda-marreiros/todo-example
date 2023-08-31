import { useGetTodos } from "../../domain/Todo/usecases/useGetTodos";

export function TodoList() {
  const { isLoading, todo: todos } = useGetTodos();

  if (isLoading) {
    return <div>Carregando</div>;
  }

  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <p>{todo.name}</p>
            <p>{todo.isCompleted ? "Completo" : "Não completo"}</p>
          </li>
        );
      })}
    </ul>
  );
}
