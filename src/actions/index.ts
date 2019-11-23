import axios from "axios";
import { Dispatch } from "redux";
import { actionTypes } from "./types";
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
export interface FetchTodosAction {
  type: actionTypes.fetchTodos;
  payload: Todo[];
}
export interface DeleteTodoAction {
  type: actionTypes.deleteTodo;
  payload: number;
}
const url = "https://jsonplaceholder.typicode.com/todos";
export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const result = await axios.get<Todo[]>(url);
    dispatch<FetchTodosAction>({
      type: actionTypes.fetchTodos,
      payload: result.data
    });
  };
};

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: actionTypes.deleteTodo,
    payload: id
  };
};
