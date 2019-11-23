import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  fetchTodos: Function;
  deleteTodo: typeof deleteTodo;
}

class _App extends React.Component<AppProps> {
  state = { isFetching: false };

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ isFetching: false });
    }
  }

  onButtonClick = (): void => {
    this.setState({ isFetching: true });
    this.props.fetchTodos();
  };

  removeTodo = (id: number): void => {
    this.props.deleteTodo(id);
  };
  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch todos</button>
        {this.state.isFetching ? <h2>Loading</h2> : null}
        <ul>
          {this.props.todos.map((todo: Todo) => {
            return (
              <li onClick={() => this.removeTodo(todo.id)} key={todo.id}>
                {todo.title}
              </li>
            );
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
  { fetchTodos, deleteTodo }
)(_App);
