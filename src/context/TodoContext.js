import React, { createContext, useState, useReducer } from "react";
import { initialState, todoReducer } from "../reducer/todoReducer";

const TodoContext = createContext("");

const TodoContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = () => {
    dispatch({ type: "ADD_TODO", payload: input });
    setInput("");
  };

  const removeTodo = (todo) => {
    dispatch({ type: "REMOVE_TODO", payload: todo });
  };

  const handleChange = (e) => setInput(e.target.value);

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, removeTodo, handleChange, input }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContextProvider, TodoContext };
