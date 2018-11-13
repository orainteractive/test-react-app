import React from "react";
import styled from "react-emotion/macro";
import { TodoType } from "data/todos";
import { TodoListItem, AddTodo } from "ui/components";

type TodoListPropsType = {
  todos: TodoType[];
  addTodo: Function;
  markTodo: Function;
};

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export function TodoList({
  todos,
  addTodo,
  markTodo,
  ...props
}: TodoListPropsType) {
  return (
    <List {...props}>
      {todos.map(todo => (
        <TodoListItem markTodo={markTodo} key={todo.id} todo={todo} />
      ))}
      <li>
        <AddTodo addTodo={addTodo} />
      </li>
    </List>
  );
}
