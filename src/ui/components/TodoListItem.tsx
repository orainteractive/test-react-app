import React from "react";
import styled from "react-emotion/macro";
import { TodoType } from "data/todos";

const ListItem = styled.li`
  margin: 0;
`;

type TodoListItemPropsType = {
  todo: TodoType;
};

export function TodoListItem({ todo }: TodoListItemPropsType) {
  return <ListItem>{todo.title}</ListItem>;
}
