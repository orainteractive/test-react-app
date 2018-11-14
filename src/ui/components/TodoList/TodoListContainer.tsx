import React from "react";
import { NamespacesConsumer } from "react-i18next";
import styled, { css, cx } from "react-emotion/macro";
import { TodoList } from "ui/components";
import { TodoType } from "data/todos";

const BORDER_RADIUS = 6;

const styles = css`
  box-shadow: 0 0.25rem 1rem var(--black-10);
  display: grid;
  grid-template-areas:
    "header"
    "content"
    "footer";
  grid-template-rows: min-content 1fr min-content;
  border-radius: ${BORDER_RADIUS}px;
`;

const Header = styled.header`
  grid-area: header;
  padding: 1rem;
  color: white;
  background-color: burlywood;
  border-radius: ${BORDER_RADIUS}px ${BORDER_RADIUS}px 0 0;
`;

const Footer = styled.footer`
  grid-area: footer;
`;

const Title = styled.h1`
  margin: 0;
  line-height: 1;
  text-shadow: 0 1px 2px var(--black-20);
`;

const Content = styled.section`
  grid-area: content;
  padding: 1rem;
  background-color: var(--white);
  border-radius: 0 0 ${BORDER_RADIUS}px ${BORDER_RADIUS}px;
`;

export function TodoListContainer({
  todos,
  markTodo,
  className,
  addTodo,
  ...props
}: {
  todos: TodoType[];
  addTodo: Function;
  markTodo: Function;
  className?: string;
}) {
  return (
    <NamespacesConsumer ns="translation">
      {t => (
        <div className={cx(styles, className)}>
          <Header>
            <Title>{t("app.title")}</Title>
          </Header>
          <Content>
            <TodoList addTodo={addTodo} markTodo={markTodo} todos={todos} />
          </Content>
          <Footer />
        </div>
      )}
    </NamespacesConsumer>
  );
}
