import React from "react";
import { NamespacesConsumer } from "react-i18next";
import styled from "react-emotion/macro";

const AddTodoForm = styled.form`
  display: grid;
  width: 100%;
  grid-template-areas: "input submit";
  grid-template-columns: 4fr 1fr;
  padding: 1rem 0;
`;

const TodoInput = styled.input`
  grid-area: input;
  font-size: 1.5rem;
  font-weight: 300;
  border: none;
`;

const SubmitTodo = styled.button`
  grid-area: submit;
  font-size: 1rem;
  font-weight: 300;
  background-color: var(--white);
  border: 1px solid var(--black-10);
  border-radius: 3px;
  cursor: pointer;
`;

async function handleFormSubmit(e: any, addTodo: Function) {
  e.preventDefault();
  const title = e.target.elements.title.value;
  e.target.reset();
  await addTodo(title);
}

export function AddTodo({ addTodo }: { addTodo: Function }) {
  return (
    <NamespacesConsumer ns="translation">
      {t => (
        <AddTodoForm onSubmit={(e: any) => handleFormSubmit(e, addTodo)}>
          <TodoInput
            type="text"
            name="title"
            required
            placeholder={t("todo.add-todo-placeholder")}
          />
          <SubmitTodo>{t("todo.submit-new-todo")}</SubmitTodo>
        </AddTodoForm>
      )}
    </NamespacesConsumer>
  );
}
