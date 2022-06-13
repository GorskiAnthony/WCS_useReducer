import React, { useState } from "react";
import "../assets/css/App.css";
import datas from "../helpers/data.js";
import TodoList from "../components/TodoList";

const App = () => {
  const [todos, setTodos] = useState(datas);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  };

  return (
    <div>
      <h1>To do</h1>
      <div>
        <input type="text" value={input} onChange={handleChange} />
        <button onClick={handleClick}>Ajouter</button>
      </div>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
