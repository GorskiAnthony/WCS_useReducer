import React from "react";

const TodoList = ({ todos, removeTodo }) => {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, id) => {
          return (
            <li key={id}>
              {todo}
              <button onClick={() => removeTodo(todo)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
