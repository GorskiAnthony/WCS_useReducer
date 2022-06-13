import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoList = () => {
  const { todos, removeTodo } = useContext(TodoContext);
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
