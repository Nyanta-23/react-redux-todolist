import React from "react";

function NavigationTodo() {
  return (
    <section className="mt-5">
      <ul className="flex justify-center gap-3 text-sm">
        <li>
          <button className="bg-violet-600 text-gray-50 px-5 py-2 rounded-full">All</button>
        </li>
        <li>
          <button className="bg-gray-500 text-gray-50 px-5 py-2 rounded-full">Todo</button>
        </li>
        <li>
          <button className="bg-gray-500 text-gray-50 px-5 py-2 rounded-full">Completed</button>
        </li>
      </ul>
    </section>
  );
}

export default NavigationTodo;
