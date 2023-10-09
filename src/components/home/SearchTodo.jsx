"use client";

import TodoContext from "@/context/TodoContext";
import { useContext } from "react";

const SearchTodo = () => {
  const { searchTodo, setSearchTodo } = useContext(TodoContext);

  return <input type="text" className="input input-bordered w-full" onChange={(e) => setSearchTodo(e.target.value)} value={searchTodo} placeholder="Search" />;
};

export default SearchTodo;
