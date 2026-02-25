import React from "react";
import TodoFilterComponent from "./todo/TodoFilterComponent";
import TodoInput from "./todo/TodoInput";
import TodoList from "./todo/TodoList";

export default function TodoContainer() {
  return (
    <div>
      <TodoFilterComponent />
      <TodoInput />
      <TodoList />
    </div>
  );
}
