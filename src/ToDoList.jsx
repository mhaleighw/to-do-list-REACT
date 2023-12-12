// ToDoList.js

import React from "react";
import { ToDoItem } from "./ToDoItem";

export function ToDoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="List">
      {todos.length === 0 && (
        <li className="centered-message">Nothing to do.</li>
      )}
      {todos.map((todo) => (
        <ToDoItem
          {...todo}
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
