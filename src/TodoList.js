import React from "react";

export default function TodoList({ todos, nbCompleted , deleteTodo, completeTodo, handleFilter }) {
  const nbUnCompleted = todos.length - nbCompleted;
  return (
    <ul>
      {todos.map((todo, index) => (
        <div class="todo-container">
          <div>
            <button class="complete-btn" onClick={completeTodo}></button>
            <li key={index}>{todo}</li>
          </div>
          <i
            class="fa-regular fa-xmark"
            id="xmark"
            onClick={() => deleteTodo(index)}
          ></i>
        </div>
      ))}
      <div class="controls">
        <span class="todo-count">
          <strong>{nbUnCompleted}</strong> items left
        </span>
        <div class="controls-list-div">
          <ul class="controls-list" data-lists>
            <li class="active" onClick={handleFilter}>All</li>
            <li onClick={handleFilter}>Active</li>
            <li onClick={handleFilter}>Completed</li>
          </ul>
        </div>
      </div>
    </ul>
  );
}
