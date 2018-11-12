import React from "react";
import styled from "react-emotion/macro";
import { TodoType } from "data/todos";
import { TodoListItem } from "ui/components";

type TodoListPropsType = {
  todos: TodoType[];
};

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export function TodoList({ todos, ...props }: TodoListPropsType) {
  return (
    <List {...props}>
      {todos.map(todo => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </List>
  );
}
