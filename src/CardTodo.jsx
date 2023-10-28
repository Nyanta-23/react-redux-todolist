import React from "react";
import InputTodo from "./components/inputTodo";
import NavigationTodo from "./components/NavigationTodo";
import ListTodo from "./components/listTodo";

function CardTodo() {
  return (
    <section className="mt-20 flex flex-col justify-center text-center text-gray-800">
      <h1 className="text-center font-bold text-3xl">
        What's the plan for today?
      </h1>
      <InputTodo />
      <NavigationTodo />
      <ListTodo />
    </section>
  );
}

export default CardTodo;
