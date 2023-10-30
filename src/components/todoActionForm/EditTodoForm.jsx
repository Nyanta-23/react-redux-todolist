import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../../redux/reducers/todo-reducer";

function EditTodoForm({ editTodo, cancelEdit }) {
  const dispatch = useDispatch();

  useEffect(() => {
    setEdit(editTodo.todo);
  }, [editTodo]);

  const [edit, setEdit] = useState("");

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(
      updateTodo({
        id: editTodo.id,
        todo: edit,
        completed: false,
      })
    );
    cancelEdit();
    setEdit("");
  };

  return (
    <>
      <form>
        <input
          type="text"
          id="todo-edit"
          placeholder="Edit to do"
          className="border px-2 py-2 font-semibold mx-3 text-base rounded-sm outline-violet-500 w-96"
          value={edit}
          onChange={(e) => setEdit(e.target.value)}
        />
        <button
          className="bg-green-500 font-medium text-gray-50 py-2 px-3 rounded-sm"
          onClick={handleEdit}
        >
          Edit
        </button>
      </form>

      <button
        className="bg-red-500 font-medium text-gray-50 py-2 px-3 rounded-sm mt-2 w-96"
        onClick={cancelEdit}
      >
        Cancel
      </button>
    </>
  );
}

export default EditTodoForm;
