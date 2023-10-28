import React from "react";

function InputTodo() {
  return (
    <section className="my-10">
      <input
        type="text"
        id="todo-input"
        placeholder="What to do?"
        className="border px-2 py-2 font-semibold mx-3 text-base rounded-sm outline-violet-500"
      />
      <button className="bg-violet-500 font-medium text-gray-100 py-2 px-3 rounded-sm">
        Add
      </button>
    </section>
  );
}

export default InputTodo;
