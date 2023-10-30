import React, { useState } from "react";
import InputTodo from "./components/inputTodo";
import NavigationTodo from "./components/NavigationTodo";
import ListTodo from "./components/listTodo";

function CardTodo() {

  const [editInputVisibility, setEditInputVisibility] = useState(false);
  const [editTodo, setEditTodo] = useState('');

  const handleEditClick = (todo) => {
    setEditInputVisibility(true);
    setEditTodo(todo);
  }

  const cancelEdit = () => {
    setEditInputVisibility(false);
  };

  return (
    <section className="mt-20 flex flex-col justify-center text-center text-gray-800">
      <h1 className="text-center font-bold text-3xl">
        What's the plan for today?
      </h1>
      <InputTodo editInputVisibility={editInputVisibility} editTodo={editTodo} cancelEdit={cancelEdit} />
      <NavigationTodo />
      <ListTodo handleEditClick={handleEditClick} editInputVisibility={editInputVisibility} />
    </section>
  );
}

export default CardTodo;
