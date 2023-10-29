import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/reducers/todo-reducer";
import { updateTodo } from "../redux/reducers/todo-reducer";

function InputTodo({ editInputVisibility, cancelEdit, editTodo }) {
  const dispatch = useDispatch();
  const [add, setAdd] = useState("");
  const [edit, setEdit] = useState("");

  useEffect(() => {
    setEdit(editTodo.todo);
  }, [editTodo]);

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(
      updateTodo({
        id: editTodo.id,
        todo: edit,
        completed: false,
      })
    );
  };

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(addTodo(add));
    setAdd("");
  };


  return (
    <section className="my-10">
      {editInputVisibility !== true ? (
        <form>
          <input
            type="text"
            id="todo-input"
            placeholder="What to do?"
            className="border px-2 py-2 font-semibold mx-3 text-base rounded-sm outline-violet-500"
            defaultValue={add}
            onChange={(e) => setAdd(e.target.value)}
          />
          <button
            className="bg-violet-500 font-medium text-gray-50 py-2 px-3 rounded-sm"
            onClick={handleAdd}
          >
            Add
          </button>
        </form>
      ) : (
        <form>
          <input
            type="text"
            id="todo-input"
            placeholder="What to do?"
            className="border px-2 py-2 font-semibold mx-3 text-base rounded-sm outline-violet-500"
            defaultValue={edit}
            onChange={(e) => setEdit(e.target.value)}
            
          />
          <button
            className="bg-green-500 font-medium text-gray-50 py-2 px-3 rounded-sm"
            onClick={handleEdit}
          >
            Edit
          </button>
        </form>
      )}

      {editInputVisibility !== true ? (
        ""
      ) : (
        <button
          className="bg-red-500 font-medium text-gray-50 py-2 px-3 rounded-sm mt-2 w-[22%]"
          onClick={cancelEdit}
        >
          Cancel
        </button>
      )}

    </section>
  );
}

export default InputTodo;
