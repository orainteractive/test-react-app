import React from "react";
import styled from "react-emotion/macro";
import { getTodos } from "data/todos";

import { TodoList } from "ui/components";

const Wrapper = styled.main`
  display: grid;
  grid-template-areas:
    ". . ."
    ". todo-list ."
    ". . .";
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

const TodoListWrapper = styled(TodoList)`
  grid-area: todo-list;
`;

export class Home extends React.Component {
  state = {
    todos: []
  };
  async componentDidMount() {
    const { data } = await getTodos();
    if (data === null) return this.setState({ todos: [] });
    const todos = Object.entries(data).map(([id, attrs]: [String, Object]) => ({
      ...attrs,
      id
    }));
    return this.setState({
      todos
    });
  }
  render() {
    return (
      <Wrapper>
        <TodoListWrapper todos={this.state.todos} />
      </Wrapper>
    );
  }
}
