import React from "react";

const TodoList = ({ todos }) => {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, id) => {
          return <li key={id}>{todo}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
