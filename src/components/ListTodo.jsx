import React from "react";
2;

function ListTodo() {
  return (
    <section className="flex justify-center">
      <ul className="flex flex-col mt-5 gap-3">
        <li className="flex border font-semibold text-base rounded-sm align-middle px-2 py-2 justify-between gap-20 border-gray-300">
          <div className="flex gap-3">
            <input type="checkbox" className="w-5 cursor-pointer border-none" />
            <h5 className="text-lg text-left">Buy Milk</h5>
          </div>
          <div className="flex gap-2">
            <button>✏️</button>
            <button>🗑️</button>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default ListTodo;
