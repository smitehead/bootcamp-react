import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeTodo,
  TodoFilter,
  toggleTodo,
} from "../../features/todo/todoSlice";
export default function TodoList() {
  const { items, filter } = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const filterItems = items.filter((todo) => {
    switch (filter) {
      case TodoFilter.ACTIVE:
        return !todo.done;
      case TodoFilter.DONE:
        return todo.done;
      default:
        return true;
    }
  });
  return (
    <div>
      <h2>나의 할일</h2>
      <ul>
        {filterItems.length > 0 ? (
          filterItems.map((todo) => {
            return (
              <li
                style={{ cursor: "pointer" }}
                key={todo.id}
                onClick={() => {
                  dispatch(toggleTodo(todo.id));
                }}
              >
                <span
                  style={{ textDecoration: todo.done ? "line-through" : "" }}
                >
                  {todo.text}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(removeTodo(todo.id));
                  }}
                >
                  삭제
                </button>
              </li>
            );
          })
        ) : (
          <h4>등록된 일정이 없습니다</h4>
        )}
      </ul>
    </div>
  );
}
