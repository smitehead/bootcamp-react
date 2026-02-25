import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todo/todoSlice";

export default function TodoInput() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  return (
    <div>
      <input
        type="text"
        name="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(addTodo(text));
          setText("");
        }}
      >
        일정등록
      </button>
    </div>
  );
}
