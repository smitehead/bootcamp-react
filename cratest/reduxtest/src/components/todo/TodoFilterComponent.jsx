import React from "react";
import { TodoFilter, setFilter } from "../../features/todo/todoSlice";
import { useDispatch } from "react-redux";
export default function TodoFilterComponent() {
  const dispatch = useDispatch();
  const changeFilter = (e) => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <div>
      <select onChange={changeFilter}>
        {Object.values(TodoFilter).map((filter) => {
          return (
            <option key={filter} value={filter}>
              {filter}
            </option>
          );
        })}
      </select>
    </div>
  );
}
