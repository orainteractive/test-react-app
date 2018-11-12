import React from "react";
import styled from "react-emotion/macro";
import { TodoType } from "data/todos";

const ListItem = styled.li`
  margin: 0;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid #0001;
  cursor: pointer;
`;

const getTextDecoration = (p: any) =>
  p.isDone ? { textDecoration: "line-through" } : {};

const getOpacity = (p: any) => (p.isDone ? { opacity: 0.33 } : { opacity: 1 });

const TodoTitle = styled.span`
  font-size: 1.5rem;
  flex: 1;
  margin-left: 0.5em;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.8);
  line-height: 1;
  ${getOpacity};
  ${getTextDecoration};
`;

const Checkbox = styled.input`
  margin: 0;
`;

type TodoListItemPropsType = {
  todo: TodoType;
  markTodo: Function;
};

export class TodoListItem extends React.Component<TodoListItemPropsType> {
  handleTodoCheck = async (e: any) => {
    const isDone = e.target.checked;
    await this.props.markTodo(e.target.id, isDone);
  };
  render() {
    const { todo } = this.props;
    return (
      <ListItem>
        <Label htmlFor={todo.id}>
          <Checkbox
            onChange={this.handleTodoCheck}
            type="checkbox"
            defaultChecked={todo.isDone}
            id={todo.id}
          />
          <TodoTitle isDone={todo.isDone}>{todo.title}</TodoTitle>
        </Label>
      </ListItem>
    );
  }
}
