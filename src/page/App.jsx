import React, { useContext } from "react";
import "../assets/css/App.css";
import TodoList from "../components/TodoList";
import { TodoContext } from "../context/TodoContext";

const App = () => {
  const { input, handleChange, addTodo } = useContext(TodoContext);
  return (
    <div>
      <h1>To do</h1>
      <div>
        <input type="text" value={input} onChange={handleChange} />
        <button onClick={addTodo}>Ajouter</button>
      </div>
      <TodoList />
    </div>
  );
};

export default App;
