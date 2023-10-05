import React from "react";
import { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [searchTodo, setSearchTodo] = useState([]);
  const [todoTags, setTodoTags] = useState([]);

  const deleteTodo = (id) => {
    const filtered = todos.filter((e) => e.id !== id);
    setTodos(filtered);
  };

  return <TodoContext.Provider value={{ todos, setTodos, searchTodo, setSearchTodo, deleteTodo, todoTags, setTodoTags }}>{children}</TodoContext.Provider>;
};

export default TodoContext;
