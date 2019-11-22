import axios from "axios";
import { Dispatch } from "redux";
import { actionTypes } from "./types";
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
const url = "https://jsonplaceholder.typicode.com/todos";
export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const result = await axios.get<Todo[]>(url);
    dispatch({ type: actionTypes.fetchTodos, payload: result.data });
  };
};
