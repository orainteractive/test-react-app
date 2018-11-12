import React from "react";
import styled from "react-emotion/macro";
import { getTodos, createTodo } from "data/todos";

import { TodoListContainer } from "ui/components";

const Wrapper = styled.main`
  display: grid;
  grid-template-areas:
    ". . ."
    ". todo-list ."
    ". . .";
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 20vh 2fr 20vh;
  min-height: 100vh;
  background-color: lightgoldenrodyellow;
`;

const TodoListWrapper = styled(TodoListContainer)`
  grid-area: todo-list;
`;

export class Home extends React.Component {
  state = {
    todos: []
  };
  async componentDidMount() {
    await this.getTodos();
  }
  getTodos = async () => {
    const { data } = await getTodos();
    if (data === null) return this.setState({ todos: [] });
    const todos = Object.entries(data).map(([id, attrs]: [String, Object]) => ({
      ...attrs,
      id
    }));
    return this.setState({
      todos
    });
  };
  addTodo = async (title: string) => {
    await createTodo(title);
    this.getTodos();
  };
  render() {
    return (
      <Wrapper>
        <TodoListWrapper addTodo={this.addTodo} todos={this.state.todos} />
      </Wrapper>
    );
  }
}
