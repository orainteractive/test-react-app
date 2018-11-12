import React from "react";
import styled from "react-emotion/macro";
import { TodoType, markTodo } from "data/todos";

const ListItem = styled.li`
  margin: 0;
  margin-bottom: 0.5rem;
`;

type TodoListItemPropsType = {
  todo: TodoType;
};

const Label = styled.label`
  display: flex;
  align-items: center;
`;

const TodoTitle = styled.span`
  font-size: 1.5rem;
  flex: 1;
  margin-left: 0.5em;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.8);
  line-height: 1;
  cursor: pointer;
`;

const Checkbox = styled.input`
  margin: 0;
`;

async function handleTodoCheck(e: any) {
  const isDone = e.target.checked;
  await markTodo(e.target.id, isDone);
}

export function TodoListItem({ todo }: TodoListItemPropsType) {
  return (
    <ListItem>
      <Label htmlFor={todo.id}>
        <Checkbox
          onChange={handleTodoCheck}
          type="checkbox"
          defaultChecked={todo.isDone}
          id={todo.id}
        />
        <TodoTitle>{todo.title}</TodoTitle>
      </Label>
    </ListItem>
  );
}
