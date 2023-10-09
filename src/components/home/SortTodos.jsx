"use client";

import { useContext } from "react";
import Link from "next/link";
import TodoContext from "@/context/TodoContext";

const SortTodos = () => {
  // const { todos, setTodos } = useContext(TodoContext);

  const selectOptions = [
    { value: "titleAsc", label: "Title Ascending" },
    { value: "titleDesc", label: "Title Descending" },
    { value: "createdAsc", label: "Latest Elements" },
    { value: "createdDesc", label: "Oldest Elements" },
    { value: "due", label: "Due Date" },
  ];

  // const sortHandler = (value) => {
  //   setSearchParams({ sort: value });
  //   todos.length > 0 && sort(value);
  // };

  // const sort = (value) => {
  //   switch (value) {
  //     case "titleAsc":
  //       setTodos([...todos].sort((a, b) => a.title.toLowerCase() < b.title.toLowerCase() && -1));
  //       break;
  //     case "titleDesc":
  //       setTodos([...todos].sort((a, b) => a.title.toLowerCase() > b.title.toLowerCase() && -1));
  //       break;
  //     case "createdAsc":
  //       setTodos([...todos].sort((a, b) => a.created > b.created && -1));
  //       break;
  //     case "createdDesc":
  //       setTodos([...todos].sort((a, b) => a.created < b.created && -1));
  //       break;
  //     case "due":
  //     //TODO
  //   }
  // };

  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-secondary w-full text-white lg:w-auto">
        Sort
      </label>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full lg:w-auto">
        {selectOptions.map(({ value, label }) => (
          <li key={value} value={value}>
            <Link href={{ query: { sort: `${value}` } }}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortTodos;
