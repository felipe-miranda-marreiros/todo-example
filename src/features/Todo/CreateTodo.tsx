import { useCreateTodo } from "../../domain/Todo/usecases/useCreateTodo";

export function CreateTodo() {
  const { onChange, onCreateTodo, todo } = useCreateTodo();

  return (
    <form>
      <input type="text" value={todo} onChange={onChange} />
      <button onClick={onCreateTodo}>Criar tarefa</button>
    </form>
  );
}
