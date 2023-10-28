import React from "react";

function NavigationTodo() {
  return (
    <section className="">
      <ul className="flex justify-center gap-5 text-sm">
        <li>
          <button>All</button>
        </li>
        <li>
          <button>Todo</button>
        </li>
        <li>
          <button>Completed</button>
        </li>
      </ul>
    </section>
  );
}

export default NavigationTodo;
