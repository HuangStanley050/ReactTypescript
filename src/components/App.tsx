import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos: <Any>() => {};
}

class _App extends React.Component<AppProps> {
  onButtonClick = (): void => {
    this.props.fetchTodos();
  };
  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch todos</button>
        <ul>
          {this.props.todos.map((todo: Todo) => {
            return <li key={todo.id}>{todo.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}
//using destructuring
const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => ({
  todos
});

export const App = connect(
  mapStateToProps,
  { fetchTodos }
)(_App);
