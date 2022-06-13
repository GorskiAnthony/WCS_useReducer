import React, { useState, useReducer } from "react";
import "../assets/css/App.css";
import datas from "../helpers/data.js";
import TodoList from "../components/TodoList";

const App = () => {
  const [input, setInput] = useState("");
  /**
   * Nous allons donc modifier le code de notre composant TodoList pour qu'il prenne en compte notre state.
   * const [todos, setTodos] = useState(datas);
   */
  const initialValue = datas;

  /**
   * Nous allons créer notre todoReducer pour gérer notre state.
   */
  const todoReducer = (state, action) => {
    /**
     *  console.log({ state, action });
     *  // output:
     *  action: {type: 'ADD_TODO', payload: 'coucou'}
     *  state: (2) ['hello', 'world!']
     */
    // console.log({ state, action });
    switch (action.type) {
      case "ADD_TODO":
        return [...state, action.payload];
      case "REMOVE_TODO":
        return state.filter((todo) => todo !== action.payload);
      default:
        return state;
    }
  };

  const [todos, dispatchTodo] = useReducer(todoReducer, initialValue);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const addTodo = () => {
    dispatchTodo({ type: "ADD_TODO", payload: input });
    setInput("");
  };

  return (
    <div>
      <h1>To do</h1>
      <div>
        <input type="text" value={input} onChange={handleChange} />
        <button onClick={addTodo}>Ajouter</button>
      </div>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
