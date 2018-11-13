import i18n from "i18n-test";
import { I18nextProvider } from "react-i18next";
import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import { AddTodo } from "./AddTodo";

afterEach(cleanup);

describe("<TodoList />", () => {
  test("the form works", () => {
    const addTodo = jest.fn();
    const { getByText } = render(
      <I18nextProvider i18n={i18n}>
        <AddTodo addTodo={addTodo} />
      </I18nextProvider>
    );
    fireEvent.click(getByText("todo.submit-new-todo"));
    expect(addTodo).toHaveBeenCalled();
  });
});
