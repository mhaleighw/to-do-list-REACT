// NewToDo.js

import React, { useState } from "react";

export const NewToDo = ({ addTodo }) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newItem === "") return;

    addTodo(newItem);
    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="search-container">
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
          placeholder="Next Thing To Do"
          className="search-input"
        />
        <button type="submit" className="btn">
          +
        </button>
      </div>
    </form>
  );
};
