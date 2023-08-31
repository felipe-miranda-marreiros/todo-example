export interface Todo {
  id: string;
  name: string;
  updated_at: string;
  created_at: string;
  isCompleted: boolean;
}

export interface CreateTodo {
  name: string;
  isCompleted: boolean;
}
