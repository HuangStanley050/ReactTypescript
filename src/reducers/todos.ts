import { Todo, FetchTodosAction, actionTypes } from "../actions";

export const todoReducer = (state: Todo[] = [], action: FetchTodosAction) => {
  switch (action.type) {
    case actionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};
