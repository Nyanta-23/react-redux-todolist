import React from "react";
import AddTodoForm from "./todoActionForm/AddTodoForm";
import EditTodoForm from "./todoActionForm/EditTodoForm";

function InputTodo({ editInputVisibility, cancelEdit, editTodo }) {

  return (
    <section className="my-10">
      {editInputVisibility !== true ? <AddTodoForm /> : <EditTodoForm editTodo={editTodo} cancelEdit={cancelEdit} />}
    </section>
  );
}

export default InputTodo;
