import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterTodo } from "../redux/reducers/todo-reducer";

function FilterItem({ type, title }) {
  const filter = useSelector((state) => state.todos.filter);
  const dispatch = useDispatch();

  return (
    <>
      <li>
        <button
          onClick={() => dispatch(filterTodo(type))}
          className={
            filter === type
              ? "bg-violet-600 text-gray-50 px-5 py-2 rounded-full"
              : "bg-gray-500 text-gray-50 px-5 py-2 rounded-full"
          }
        >
          {title}
        </button>
      </li>
    </>
  );
}

const NavigationTodo = () => (
  <section className="mt-5">
    <ul className="flex justify-center gap-3 text-sm">
      <FilterItem type="all" title="All" />
      <FilterItem type="todo" title="Todo" />
      <FilterItem type="completed" title="Completed" />
    </ul>
  </section>
);

export default NavigationTodo;
