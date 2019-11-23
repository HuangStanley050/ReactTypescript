import { FetchTodosAction, DeleteTodoAction } from "./todos";

export enum actionTypes {
  fetchTodos,
  deleteTodo
}

export type Action = FetchTodosAction | DeleteTodoAction;
