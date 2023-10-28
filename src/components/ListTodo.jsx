import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

function ListTodo() {
  const {todos} = useSelector((state) => state.todos);

  return (
    <section className="flex justify-center">
      <ul className="flex flex-col mt-5 gap-3">
        {todos.map(todo => (
          <li key={todo.id} className="flex border font-semibold text-base rounded-sm align-middle px-2 py-2 justify-between gap-20 border-gray-300">
            <div className="flex gap-3">
              <input
                type="checkbox"
                className="w-5 cursor-pointer border-none"
              />
              <h5 className="text-lg text-left">{todo.value}</h5>
            </div>
            <div className="flex gap-2">
              <button>✏️</button>
              <button>🗑️</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ListTodo;
