import { Todo } from "../actions";
import { FetchTodosAction } from "../actions";
import { actionTypes } from "../actions/types";

export const todoReducer = (state: Todo[] = [], action: FetchTodosAction) => {
  switch (action.type) {
    case actionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};
