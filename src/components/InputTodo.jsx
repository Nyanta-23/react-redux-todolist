import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducers/todo-reducer";

function InputTodo() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    e.preventDefault();
    console.log(input);
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <section className="my-10">
      <form>
        <input
          type="text"
          id="todo-input"
          placeholder="What to do?"
          className="border px-2 py-2 font-semibold mx-3 text-base rounded-sm outline-violet-500"
          value={input}
          onChange={(e) => setInput(e.target.value)} 
        />
        <button
          className="bg-violet-500 font-medium text-gray-100 py-2 px-3 rounded-sm"
          onClick={handleInput}
        >
          Add
        </button>
      </form>
    </section>
  );
}

export default InputTodo;
