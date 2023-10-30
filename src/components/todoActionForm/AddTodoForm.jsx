import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/reducers/todo-reducer";

function AddTodoForm() {
  const dispatch = useDispatch();

  const [add, setAdd] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    console.log(e.value);
    if (add !== "") {
      dispatch(addTodo(add));
      setAdd("");
    }
  };

  return (
    <form>
      <input
        type="text"
        id="todo-input"
        placeholder="What to do?"
        className="border px-2 py-2 font-semibold mx-3 text-base rounded-sm outline-violet-500"
        value={add}
        onChange={(e) => setAdd(e.target.value)}
      />
      <button
        className="bg-violet-500 font-medium text-gray-50 py-2 px-3 rounded-sm"
        onClick={handleAdd}
      >
        Add
      </button>
    </form>
  );
}

export default AddTodoForm;
