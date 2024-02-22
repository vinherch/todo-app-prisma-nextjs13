"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const TodoSearch = () => {
  const [searchTodo, setSearchTodo] = useState("");
  const router = useRouter();

  const handleSearchInput = (e: any) => {
    setSearchTodo(e.target.value);
    e.target.value === "" && router.push("/home");
    e.code === "Enter" && find();
  };

  const find = () => {
    router.push(`/home?q=${searchTodo}`);
  };

  return (
    <>
      <input
        type="text"
        name="search-todo"
        className="input input-bordered w-full"
        onChange={(e) => handleSearchInput(e)}
        onKeyDown={(e) => handleSearchInput(e)}
        value={searchTodo}
        placeholder="Search"
      />
      <button className="btn btn-primary text-white" onClick={() => find()}>
        find
      </button>
      {searchTodo !== "" && (
        <button className="btn" onClick={() => router.push("/home")}>
          clear
        </button>
      )}
    </>
  );
};

export default TodoSearch;
