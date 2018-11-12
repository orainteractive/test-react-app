import React from "react";
import styled from "react-emotion/macro";
import { NamespacesConsumer } from "react-i18next";
import { TodoType } from "data/todos";
import { TodoListItem } from "ui/components";

type TodoListPropsType = {
  todos: TodoType[];
  addTodo: Function;
};

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const AddTodoForm = styled.form`
  display: grid;
  width: 100%;
  grid-template-areas: "input submit";
  grid-template-columns: 4fr 1fr;
  margin-top: 1rem;
`;

const TodoInput = styled.input`
  grid-area: input;
`;

const SubmitTodo = styled.button`
  grid-area: submit;
`;

async function handleFormSubmit(e: any, addTodo: Function) {
  e.preventDefault();
  const title = e.target.elements.title.value;
  e.target.reset();
  await addTodo(title);
}

export function TodoList({ todos, addTodo, ...props }: TodoListPropsType) {
  return (
    <NamespacesConsumer ns="translation">
      {t => (
        <List {...props}>
          {todos.map(todo => (
            <TodoListItem key={todo.id} todo={todo} />
          ))}
          <li>
            <AddTodoForm onSubmit={(e: any) => handleFormSubmit(e, addTodo)}>
              <TodoInput
                type="text"
                name="title"
                required
                placeholder={t("todo.add-todo-placeholder")}
              />
              <SubmitTodo>{t("todo.submit-new-todo")}</SubmitTodo>
            </AddTodoForm>
          </li>
        </List>
      )}
    </NamespacesConsumer>
  );
}
