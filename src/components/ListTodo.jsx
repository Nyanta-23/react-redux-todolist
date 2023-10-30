import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { deleteTodo, isCompleted } from "../redux/reducers/todo-reducer";

function ListTodo({ handleEditClick, editInputVisibility }) {
  const { todos } = useSelector((state) => state.todos);
  const statsFilter = useSelector((state) => state.todos.filter);
  const dispatch = useDispatch();

  const filteringByType = todos.filter((todo) => {
    if (statsFilter === "completed") {
      return todo.completed;
    } else if (statsFilter === "todo") {
      return !todo.completed;
    } else {
      return todo;
    }
  });

  return (
    <section className="flex justify-center">
      <ul className="flex flex-col mt-5 gap-3 w-96">
        {filteringByType.map((todo) => (
          <li
            key={todo.id}
            className="flex border font-semibold text-base rounded-sm align-middle px-2 py-2 justify-between gap-20 border-gray-300 w-full"
          >
            <div className="flex gap-3">
              {!editInputVisibility ? (
                <input
                  type="checkbox"
                  className="w-5 cursor-pointer border-none"
                  onChange={() => dispatch(isCompleted(todo.id))}
                  checked={todo.completed}
                />
              ) : (
                <div className="w-5"></div>
              )}

              <h5
                className={
                  todo.completed
                    ? "text-lg text-left line-through"
                    : "text-lg text-left"
                }
              >
                {todo.todo}
              </h5>
            </div>
            {!editInputVisibility ? (
              <div className="flex gap-2">
                <button onClick={() => handleEditClick(todo)}>✏️</button>
                <button onClick={() => dispatch(deleteTodo(todo.id))}>
                  🗑️
                </button>
              </div>
            ) : (
              <div className="flex gap-2"></div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ListTodo;
