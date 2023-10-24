"use client";

import { createContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [searchTodo, setSearchTodo] = useState([]);
  const [todoTags, setTodoTags] = useState([]);
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  return (
    <TodoContext.Provider
      value={{
        tag,
        setTag,
        tags,
        setTags,
        searchTodo,
        setSearchTodo,
        todoTags,
        setTodoTags,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
