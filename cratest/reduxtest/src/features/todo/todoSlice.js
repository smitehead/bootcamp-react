import { createSlice } from "@reduxjs/toolkit";

export const TodoFilter = {
  ALL: "ALL",
  DONE: "DONE",
  ACTIVE: "ACTIVE",
};
Object.freeze(TodoFilter);

const initialState = {
  items: [], //todo객체
  filter: TodoFilter.ALL,
};
const todoGenerator = (function* (title) {
  let num = 1;
  while (true) {
    yield `${title}_${num++}`;
  }
})("todo");

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(text) {
        //미리 payload의 형태를 설정
        //반환되는 객체가 action
        return {
          payload: {
            id: todoGenerator.next().value,
            text: text,
            done: false,
          },
        };
      },
    },
    removeTodo(state, action) {
      state.items = state.items.filter((todo) => todo.id != action.payload);
    },
    toggleTodo(state, action) {
      const todo = state.items.find((t) => t.id == action.payload);
      if (todo) {
        todo.done = !todo.done;
      }
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, setFilter } = todoSlice.actions;

export default todoSlice.reducer;
